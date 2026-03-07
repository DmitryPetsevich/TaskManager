import { Navigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useAccessToken } from '@features/auth/model/auth.store';

export const RootRedirect = () => {
  const accessToken = useAccessToken();

  return accessToken ? (
    <Navigate to={ROUTES.dashboard} replace />
  ) : (
    <Navigate to={ROUTES.auth} replace />
  );
};
