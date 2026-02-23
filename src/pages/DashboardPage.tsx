import { useAuthStore } from '@features/auth/model/auth.store';

export const DashboardPage = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};
