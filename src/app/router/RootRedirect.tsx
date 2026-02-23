import { Navigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';

export const RootRedirect = () => {
  const isAuth = false;

  return isAuth ? <Navigate to={ROUTES.dashboard} replace /> : <Navigate to={ROUTES.auth} replace />;
};
