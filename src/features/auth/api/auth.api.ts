import { loginUser } from '@entities/user';
import type { LoginFormValues } from '@features/auth/model/login.schema';

export const loginRequest = async ({ email, password }: LoginFormValues) => {
  return loginUser(email, password);
};
