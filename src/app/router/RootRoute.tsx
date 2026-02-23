import { Navigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useAuthStore } from '@features/auth/model/auth.store';

export const RootRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? (
    <Navigate to={ROUTES.dashboard} replace />
  ) : (
    <Navigate to={ROUTES.auth} replace />
  );
};
