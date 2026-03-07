import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@app/layouts/RootLayout';
import { RootRedirect } from '@app/router/redirects/RootRedirect';
import { AuthLayout } from '@app/layouts/AuthLayout';
import { AppLayout } from '@app/layouts/AppLayout';
import { AuthPage } from '@pages/AuthPage';
import { DashboardPage } from '@pages/DashboardPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ROUTES } from '@app/router/routes';
import { AppGuard } from '@app/router/guards/AppGuard';
import { AuthGuard } from '@app/router/guards/AuthGuard';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RootRedirect />,
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
    ],
  },
]);
