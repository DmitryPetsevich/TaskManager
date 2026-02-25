import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IUserDto } from '@entities/user/user.types';

type SafeUser = Omit<IUserDto, 'password'>;

type AuthState = {
  accessToken: string | null;
  user: SafeUser | null;
  login: (user: SafeUser, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      login: (user, token) =>
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
