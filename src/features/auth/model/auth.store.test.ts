import { beforeEach, describe, expect, test } from 'vitest';
import { useAuthStore } from '@features/auth/model/auth.store';

describe('Auth Store:', () => {
  const user = {
    id: '1',
    name: 'Name',
    lastName: 'LastName',
    email: '1@gmail.com',
  };
  const token = 'token123';

  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      accessToken: null,
    });
  });

  test('Login should set user and accessToken', () => {
    useAuthStore.getState().login(user, token);

    const state = useAuthStore.getState();

    expect(state.user).toEqual(user);
    expect(state.accessToken).toBe(token);
  });

  test('Logout should clear auth state', () => {
    useAuthStore.getState().login(user, token);

    useAuthStore.getState().logout();

    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.accessToken).toBeNull();
  });
});
