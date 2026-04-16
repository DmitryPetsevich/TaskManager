import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 justify-center pt-12">
        <Outlet />
      </div>
      <div className="flex justify-center items-center h-[48px] bg-gray-100" />
    </div>
  );
};
