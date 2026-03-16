import { useQueryClient } from '@tanstack/react-query';
import { useLogoutAction } from '@features/auth/model/auth.store';

export const useLogout = () => {
  const logout = useLogoutAction();
  const queryClient = useQueryClient();

  return () => {
    logout();
    queryClient.clear();
  };
};
