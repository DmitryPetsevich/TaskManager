import { LogoutButton } from '@features/auth';

export const SidebarFooter = () => (
  <div className="h-12 flex justify-end p-1 border-t border-gray-200">
    <LogoutButton />
  </div>
);
