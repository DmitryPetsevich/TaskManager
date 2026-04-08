import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '@entities/user';
import { ROUTES } from '@shared/config/routes';

export const AppGuard = () => {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return <Navigate to={ROUTES.auth} replace />;
  }

  return <Outlet />;
};
