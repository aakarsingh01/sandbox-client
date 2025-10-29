// Local utility for analytics - replaces @codesandbox/common/lib/utils/analytics
// No-op analytics for open-source version
export default function track(event: string, data?: any): void {
  // For open-source version, we can either:
  // 1. Do nothing (no-op)
  // 2. Log to console in development
  // 3. Send to a configurable analytics endpoint
  
  if ((window as any).NODE_ENV === 'development') {
    console.log('Analytics:', event, data);
  }
  
  // Optional: Send to configurable analytics endpoint
  const analyticsEndpoint = (window as any).ANALYTICS_ENDPOINT;
  if (analyticsEndpoint) {
    fetch(analyticsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, data, timestamp: Date.now() }),
    }).catch(err => {
      console.warn('Failed to send analytics:', err);
    });
  }
}