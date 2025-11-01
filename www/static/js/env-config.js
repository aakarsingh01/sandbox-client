// Environment configuration for self-hosted CodeSandbox
window.__CSB_ENV__ = {
  // Disable external API connections
  SANDPACK_ENDPOINT: null,
  API_URL: null,
  CODESANDBOX_HOST: window.location.origin,
  
  // Enable offline mode
  OFFLINE_MODE: true,
  
  // Disable features that require external connections
  DISABLE_ANALYTICS: true,
  DISABLE_TELEMETRY: true,
  
  // Basic configuration
  NODE_ENV: 'production',
  PUBLIC_URL: '',
  
  // Sandpack configuration for local usage
  SANDPACK_CONFIG: {
    offline: true,
    bundlerURL: null,
    fileResolver: 'local'
  }
};

// Override any existing global configurations
if (typeof window !== 'undefined') {
  window.process = window.process || {};
  window.process.env = window.process.env || {};
  
  // Set environment variables that the app might expect
  Object.assign(window.process.env, {
    NODE_ENV: 'production',
    PUBLIC_URL: '',
    REACT_APP_OFFLINE: 'true'
  });
}

console.log('CodeSandbox Environment: Self-hosted mode enabled');