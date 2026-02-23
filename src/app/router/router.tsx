import { createBrowserRouter } from 'react-router-dom';
import { RootRoute } from '@app/router/RootRoute';
import { AuthLayout } from '@layouts/AuthLayout';
import { AppLayout } from '@layouts/AppLayout';
import { AuthPage } from '@pages/AuthPage';
import { DashboardPage } from '@pages/DashboardPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ROUTES } from '@app/router/routes';
import { AppGuard } from '@app/router/AppGuard';
import { AuthGuard } from '@app/router/AuthGuard';

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <RootRoute />,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.auth,
            element: <AuthPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AppGuard />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTES.dashboard,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
  },
]);
