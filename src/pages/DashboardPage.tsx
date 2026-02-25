import { useLogoutAction } from '@features/auth/model/auth.store';

export const DashboardPage = () => {
  const logout = useLogoutAction();
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};
