import React, { useEffect } from 'react';
import { useAppState, useActions, useEffects } from 'app/overmind';
import { Redirect, withRouter, useParams } from 'react-router-dom';
import { css } from '@styled-system/css';
import { signInPageUrl } from '@codesandbox/common/lib/utils/url-generator';

import { CodeSandboxIcon } from '@codesandbox/components/lib/components/Icon/icons';

import { Element, Stack, ThemeProvider, Text } from '@codesandbox/components';

const SandpackSecret = () => {
  const { hasLogIn } = useAppState();
  const { api } = useEffects();
  const { genericPageMounted } = useActions();
  const params: { teamId?: string } = useParams();

  const [error, setError] = React.useState<string>();

  useEffect(() => {
    genericPageMounted();
  }, [genericPageMounted]);

  useEffect(() => {
    // In open-source mode, we simplify the authentication flow
    const listener = async (event: MessageEvent) => {
      if (event.data && event.data.$type === 'request-sandpack-secret') {
        const teamId = params.teamId;

        try {
          // Try to get token from our open-source method
          const token = await api.getSandpackTokenFromTeam(teamId);
          
          (event.source as WindowProxy).postMessage(
            { $type: 'sandpack-secret', token },
            event.origin
          );

          window.removeEventListener('message', listener);
        } catch (e) {
          setError(
            "No authentication token available. Please configure SANDPACK_TOKEN or use anonymous mode."
          );
          
          // Still send a message to close the flow, but with no token
          (event.source as WindowProxy).postMessage(
            { $type: 'sandpack-secret', token: null },
            event.origin
          );
          
          window.removeEventListener('message', listener);
        }
      }
    };

    window.addEventListener('message', listener);
    
    return () => window.removeEventListener('message', listener);
  }, [api, params.teamId]);

  // In open-source mode, we don't require traditional login
  // The authentication is handled via tokens

  return (
    <ThemeProvider>
      <Element
        css={css({
          backgroundColor: 'sideBar.background',
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
        })}
      >
        <Stack
          align="center"
          css={{
            margin: 'auto',
            padding: '48px 0',
            color: '#fff',
          }}
          direction="vertical"
          justify="space-between"
          gap={8}
        >
          <Stack css={{ gap: '1em' }} align="center">
            <CodeSandboxIcon width={48} height={48} />
            <Text
              as="h1"
              css={{
                margin: 0,
                textAlign: 'center',
                fontFamily: 'Everett, sans-serif',
                lineHeight: 1.17,
                letterSpacing: '-0.018em',
              }}
              size={34}
              weight="medium"
            >
              CodeSandbox
            </Text>
          </Stack>

          <Text css={{ textAlign: 'center' }}>
            {error ? (
              <>
                Authentication Error
                <br />
                {error}
              </>
            ) : (
              <>
                Authenticating Sandpack...
                <br />
                This window will close automatically.
              </>
            )}
          </Text>
        </Stack>
      </Element>
    </ThemeProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default withRouter(SandpackSecret);
