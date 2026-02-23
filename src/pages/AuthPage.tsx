import { useAuthStore } from '@features/auth/model/auth.store';

export const AuthPage = () => {
  const login = useAuthStore((state) => state.login);
  return (
    <>
      <h1>Auth Page</h1>
      <button onClick={() => login('fake-token', { id: '1', email: 'test@test.com' })}>
        Login
      </button>
    </>
  );
};
