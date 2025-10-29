// Local utility for React components - replaces @codesandbox/common/lib/components/flex/Centered
import * as React from 'react';

interface CenteredProps {
  horizontal?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Centered: React.FC<CenteredProps> = ({ children, horizontal, vertical, style, ...props }) => {
  const centeredStyle: React.CSSProperties = {
    display: 'flex',
    ...(horizontal && { justifyContent: 'center' }),
    ...(vertical && { alignItems: 'center' }),
    ...(vertical && horizontal && { flexDirection: 'column' }),
    ...style,
  };

  return (
    <div style={centeredStyle} {...props}>
      {children}
    </div>
  );
};

export default Centered;