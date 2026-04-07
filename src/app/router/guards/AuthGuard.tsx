import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '@entities/user';
import { ROUTES } from '@app/router/routes';

export const AuthGuard = () => {
  const accessToken = useAccessToken();

  if (accessToken) {
    return <Navigate to={ROUTES.projects} replace />;
  }

  return <Outlet />;
};
