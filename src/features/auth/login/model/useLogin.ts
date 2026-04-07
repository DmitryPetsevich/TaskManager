import { useMutation } from '@tanstack/react-query';
import { loginUser, useLoginAction } from '@entities/user';

export const useLogin = () => {
  const login = useLoginAction();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ user, token }) => {
      login(user, token);
    },
  });
};
