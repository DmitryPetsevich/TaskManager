import { Navigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useAccessToken } from '@entities/user';

export const RootRedirect = () => {
  const accessToken = useAccessToken();

  return accessToken ? (
    <Navigate to={ROUTES.projects} replace />
  ) : (
    <Navigate to={ROUTES.auth} replace />
  );
};
