import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: string;
  email: string;
};

type AuthState = {
  accessToken: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      isAuth: false,
      login: (token, user) =>
        set({
          accessToken: token,
          user,
        }),
      logout: () =>
        set({
          accessToken: null,
          user: null,
        }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
