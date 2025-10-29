// Open-source friendly token management
// Replaces cookie-based authentication with environment-configurable tokens

export const getSandpackSecret = (): string | null => {
  // Check for environment-provided token first
  const envToken = (window as any).SANDPACK_TOKEN || (window as any).CODESANDBOX_TOKEN;
  if (envToken) {
    return envToken;
  }

  // Fallback to localStorage for user-provided tokens
  try {
    return localStorage.getItem('sandpack_token');
  } catch (e) {
    console.warn('Unable to access localStorage for sandpack token');
    return null;
  }
};

export const removeSandpackSecret = (): void => {
  // For open-source version, we just clear localStorage
  try {
    localStorage.removeItem('sandpack_token');
  } catch (e) {
    console.warn('Unable to remove sandpack token from localStorage');
  }
};

export const setSandpackSecret = (secret: string | null): void => {
  if (secret === null) {
    removeSandpackSecret();
    return;
  }

  try {
    localStorage.setItem('sandpack_token', secret);
  } catch (e) {
    console.warn('Unable to store sandpack token in localStorage');
  }
};

function getPopupOffset({ width, height }: { width: number; height: number }) {
  const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
  const wTop = window.screenTop ? window.screenTop : window.screenY;

  const left = wLeft + window.innerWidth / 2 - width / 2;
  const top = wTop + window.innerHeight / 2 - height / 2;

  return { top, left };
}

function getPopupSize() {
  return { width: 1020, height: 618 };
}

function getPopupDimensions() {
  const { width, height } = getPopupSize();
  const { top, left } = getPopupOffset({ width, height });

  return `width=${width},height=${height},top=${top},left=${left}`;
}

export function getProtocolAndHostWithSSE(): string {
  // For open-source deployments, use configurable host
  const customHost = (window as any).SANDPACK_HOST || (window as any).CODESANDBOX_HOST;
  if (customHost) {
    return customHost;
  }

  // Default fallbacks for development and production
  if (document.location.host.startsWith('localhost')) {
    return 'http://localhost:3000';
  }

  return 'https://codesandbox.io'; // Default fallback
}

// No-op replacement for requestSandpackSecretFromApp
// In open-source mode, we expect tokens to be provided via environment or user configuration
export const requestSandpackSecretFromApp = async (
  teamId?: string,
  host: string = getProtocolAndHostWithSSE()
): Promise<string | null> => {
  console.warn('requestSandpackSecretFromApp is deprecated in open-source mode. Please configure SANDPACK_TOKEN environment variable or use anonymous mode.');
  
  // Try to get existing token
  const existingToken = getSandpackSecret();
  if (existingToken) {
    return existingToken;
  }

  // For open-source, we can't do the popup auth flow
  // Instead, return null to indicate anonymous mode
  return null;
};
