import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useLoginAction } from '@features/auth/model/auth.store';
import { loginRequest } from '@features/auth/api/auth.api';
import { ROUTES } from '@app/router/routes';

export const useLogin = () => {
  const navigate = useNavigate();
  const login = useLoginAction();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: ({ user, token }) => {
      login(user, token);

      navigate(ROUTES.dashboard, { replace: true });
    },
  });
};
