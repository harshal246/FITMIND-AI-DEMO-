/**
 * FitMind AI Application Configuration
 *
 * Centralizes environment variables so changing .env immediately updates
 * all external links and application endpoints throughout the app.
 */

export const LIVE_APP_URL =
  import.meta.env.VITE_LIVE_APP_URL || 'https://100.63.74.53.sslip.io/';
