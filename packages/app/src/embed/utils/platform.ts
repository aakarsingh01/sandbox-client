// Local utility for platform detection - replaces @codesandbox/common/lib/utils/platform
export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
};

export const isAndroid = (): boolean => {
  return /Android/.test(navigator.userAgent);
};

export const isMobile = (): boolean => {
  return isIOS() || isAndroid();
};

export const isSafari = (): boolean => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isChrome = (): boolean => {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
};