import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IUserDto } from '@entities/user/user.types';

type SafeUser = Omit<IUserDto, 'password'>;

type AuthState = {
  accessToken: string | null;
  user: SafeUser | null;
  login: (token: string, user: SafeUser) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
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
