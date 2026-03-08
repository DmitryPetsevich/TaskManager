import { useLogoutAction } from '@features/auth/model/auth.store';
import { useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const logout = useLogoutAction();
  const queryClient = useQueryClient();

  return () => {
    logout();
    queryClient.clear();
  };
};
