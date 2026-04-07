import { Outlet } from 'react-router-dom';
import { Sidebar } from '@widgets/sidebar';

export const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
