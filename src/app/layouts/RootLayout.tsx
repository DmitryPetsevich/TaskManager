import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '@shared/ui/loader/Loader';

export const RootLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
