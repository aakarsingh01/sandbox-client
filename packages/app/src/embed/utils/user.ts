// Local utility for user authentication - replaces @codesandbox/common/lib/utils/user
export function hasLogIn(): boolean {
  try {
    const jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== 'null';
  } catch (e) {
    return false;
  }
}

export function getJWT(): string | null {
  try {
    return JSON.parse(localStorage.getItem('jwt') || 'null');
  } catch (e) {
    return null;
  }
}