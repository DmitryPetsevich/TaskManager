import axios from 'axios';
import { useAuthStore } from '@features/auth/model/auth.store';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Set fake token
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
