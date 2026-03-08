import { useMutation } from '@tanstack/react-query';
import { useLoginAction } from '@features/auth/model/auth.store';
import { loginRequest } from '@features/auth/api/auth.api';

export const useLogin = () => {
  const login = useLoginAction();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: ({ user, token }) => {
      login(user, token);
    },
  });
};
