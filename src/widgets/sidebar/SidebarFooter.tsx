import { LogoutButton } from '@features/auth/ui/logout-button/LogoutButton';

export const SidebarFooter = () => (
  <div className="flex justify-end p-1 border-t border-gray-200">
    <LogoutButton />
  </div>
);
