const ENVIRONMENT = import.meta.env.MODE as 'development' | 'production' | 'staging' | string

export const CONFIG = {
  ENVIRONMENT,
  isDevelopment: () => ENVIRONMENT === 'development',
  isProduction: () => ENVIRONMENT === 'production',
}

export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL as string

export const BASE_URL = `${window.location.origin}${
  PUBLIC_URL ? `/${PUBLIC_URL.replace(/\//, '')}` : ''
}`

export const API_URL = import.meta.env.VITE_API_URL as string

export const AUTO_REFRESH_INTERVAL =
  (import.meta.env.VITE_AUTO_REFRESH_INTERVAL_MIN || 5) * 60 * 1000
export const IDLE_TIMEOUT = (import.meta.env.VITE_IDLE_TIMEOUT_MIN || 30) * 60 * 1000


