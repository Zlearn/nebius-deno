// API key for authentication
// Get from environment variable with fallback for development
export const API_KEY = Deno.env.get('RELAY_API_KEY') ?? 'd8b5bc18-8bb7-4113-a58b-ba1fdcb9df81';

// Server configuration
export const SERVER_PORT = 8000;

// API endpoints
export const API_ENDPOINTS = {
  CHAT_COMPLETIONS: '/chat/completions',
  ADMIN: {
    KEYS: '/admin/keys',
    CONFIG: '/admin/config'
  }
};

// External API configuration
export const EXTERNAL_API = {
  CENTML: {
    BASE_URL: 'https://api.studio.nebius.ai/v1',
    ENDPOINTS: {
      CHAT_COMPLETIONS: '/chat/completions'
    }
  }
};

// Redis 配置
export const REDIS_CONFIG = {
  URL: 'https://smashing-stag-11906.upstash.io',
  TOKEN: 'AS6CAAIjcDFmYTZhYTVlMTJjNzA0ZjAwOTQ3OGNlMGYxZThmZTNhMHAxMA',
};
