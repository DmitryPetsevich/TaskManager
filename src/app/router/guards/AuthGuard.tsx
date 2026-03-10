import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '@features/auth/model/auth.store';
import { ROUTES } from '@app/router/routes';

export const AuthGuard = () => {
  const accessToken = useAccessToken();

  if (accessToken) {
    return <Navigate to={ROUTES.projects} replace />;
  }

  return <Outlet />;
};
