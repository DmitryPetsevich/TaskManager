import { useQueryClient } from '@tanstack/react-query';
import { useLogoutAction } from '@entities/user';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useLogoutAction();

  return () => {
    logout();
    queryClient.clear();
  };
};
