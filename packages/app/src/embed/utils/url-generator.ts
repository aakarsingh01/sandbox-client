// Local utility for URL generation - replaces @codesandbox/common/lib/utils/url-generator
export function signInPageUrl(): string {
  // For open-source use, point to a configurable sign-in URL or disable auth
  const baseUrl = (window as any).CODESANDBOX_HOST || 'https://codesandbox.io';
  return `${baseUrl}/signin`;
}