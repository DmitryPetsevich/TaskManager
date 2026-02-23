import { createBrowserRouter } from 'react-router-dom';
import { RootRedirect } from '@app/router/RootRedirect';
import { AuthLayout } from '@layouts/AuthLayout';
import { AppLayout } from '@layouts/AppLayout';
import { AuthPage } from '@pages/AuthPage';
import { DashboardPage } from '@pages/DashboardPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ROUTES } from '@app/router/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <RootRedirect />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.auth,
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.dashboard,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
  },
]);
