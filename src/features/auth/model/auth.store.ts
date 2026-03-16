import { create, type StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { IUserDto } from '@entities/user/model/types';

type SafeUser = Omit<IUserDto, 'password'>;

interface IInitialState {
  accessToken: string | null;
  user: SafeUser | null;
}

interface IActions {
  login: (user: SafeUser, token: string) => void;
  logout: () => void;
}

interface IAuthState extends IInitialState, IActions {}

const initialState: IInitialState = {
  accessToken: null,
  user: null,
};

const store: StateCreator<IAuthState> = (set) => ({
  ...initialState,
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
});

export const useAuthStore = create<IAuthState>()(
  persist(store, {
    name: 'auth-store',
    storage: createJSONStorage(() => localStorage),
  }),
);

// Selectors
export const useAccessToken = () => useAuthStore((state) => state.accessToken);
export const useUser = () => useAuthStore((state) => state.user);
export const useLoginAction = () => useAuthStore((state) => state.login);
export const useLogoutAction = () => useAuthStore((state) => state.logout);
