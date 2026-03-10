import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@app/layouts/RootLayout';
import { RootRedirect } from '@app/router/redirects/RootRedirect';
import { AuthLayout } from '@app/layouts/AuthLayout';
import { AppLayout } from '@app/layouts/AppLayout';

import { ROUTES } from '@app/router/routes';
import { AppGuard } from '@app/router/guards/AppGuard';
import { AuthGuard } from '@app/router/guards/AuthGuard';

const AuthPage = lazy(() => import('@pages/AuthPage'));
const ProjectsPage = lazy(() => import('@pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

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
                path: ROUTES.projects,
                element: <ProjectsPage />,
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
