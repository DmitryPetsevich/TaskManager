import { Sidebar } from '@widgets/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1  overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
