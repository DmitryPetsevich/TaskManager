import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <header>App Layout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
