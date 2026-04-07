import { MdLogout } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { useLogout } from '../model/useLogout';

export const LogoutButton = () => {
  const logout = useLogout();

  return <IconButton icon={<MdLogout />} onClick={logout} aria-label="logout-button" />;
};
