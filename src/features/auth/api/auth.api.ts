import { getUsers } from '@entities/user/user.api';
import { generateFakeToken } from '@shared/lib/authToken';

export const loginRequest = async ({ email, password }: { email: string; password: string }) => {
  const users = await getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error('Invalid credentails');

  const token = generateFakeToken();
  const { password: _password, ...safe } = user;

  return { user: safe, token };
};
