import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '@features/auth/model/auth.store';
import { ROUTES } from '@app/router/routes';

export const AppGuard = () => {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return <Navigate to={ROUTES.auth} replace />;
  }

  return <Outlet />;
};
