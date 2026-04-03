import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@app/layouts/RootLayout';
import { RootRedirect } from '@app/router/redirects/RootRedirect';
import { AuthLayout } from '@app/layouts/AuthLayout';
import { AppLayout } from '@app/layouts/AppLayout';

import { ROUTES } from '@app/router/routes';
import { AppGuard } from '@app/router/guards/AppGuard';
import { AuthGuard } from '@app/router/guards/AuthGuard';
import { DefaultErrorElement } from '@shared/ui/default-error-element/DefaultErrorElement';

const AuthPage = lazy(() => import('@pages/auth-page/AuthPage'));
const ProjectsPage = lazy(() => import('@pages/projects-page/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@pages/project-detail-page/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('@pages/not-found-page/NotFoundPage'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <DefaultErrorElement />,
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
                errorElement: <DefaultErrorElement />,
              },
              {
                path: ROUTES.projectDetail,
                element: <ProjectDetailPage />,
                errorElement: <DefaultErrorElement />,
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
