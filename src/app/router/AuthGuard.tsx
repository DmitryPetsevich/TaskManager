import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@features/auth/model/auth.store';
import { ROUTES } from '@app/router/routes';

export const AuthGuard = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (accessToken) {
    return <Navigate to={ROUTES.dashboard} replace />;
  }

  return <Outlet />;
};
