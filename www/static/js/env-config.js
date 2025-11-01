// Environment configuration for self-hosted CodeSandbox with bundler enabled
window.__CSB_ENV__ = {
  // Keep external API connections minimal but allow npm/CDN
  SANDPACK_ENDPOINT: window.location.origin,
  API_URL: window.location.origin + '/api',
  CODESANDBOX_HOST: window.location.origin,
  
  // Enable bundler functionality
  OFFLINE_MODE: false,
  ENABLE_BUNDLER: true,
  
  // Disable only analytics/telemetry, keep bundler features
  DISABLE_ANALYTICS: true,
  DISABLE_TELEMETRY: true,
  
  // Basic configuration
  NODE_ENV: 'production',
  PUBLIC_URL: '',
  
  // Sandpack configuration for local bundling with external deps
  SANDPACK_CONFIG: {
    offline: false,
    bundlerURL: window.location.origin,
    fileResolver: 'browser',
    // Allow fetching from public CDNs
    externalResolver: {
      npm: 'https://unpkg.com',
      jsdelivr: 'https://cdn.jsdelivr.net/npm',
      skypack: 'https://cdn.skypack.dev',
      esm: 'https://esm.sh'
    }
  },
  
  // Enable transpilers
  TRANSPILERS: {
    babel: true,
    typescript: true,
    sass: true,
    less: true,
    stylus: true,
    vue: true,
    svelte: true,
    postcss: true
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