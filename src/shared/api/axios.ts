import axios from 'axios';
import { useAuthStore } from '@entities/user';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

// Set fake delay
api.interceptors.response.use(async (response) => {
  await delay(500);

  return response;
});
