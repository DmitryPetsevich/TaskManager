import { api } from '@shared/api/axios';
import { generateFakeToken } from '@shared/lib/authToken';
import type { UserDTO } from '../model/types';

const getUsers = async (): Promise<UserDTO[]> => {
  const response = await api.get<UserDTO[]>('/users');

  return response.data;
};

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const users = await getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error('Invalid credentails');

  const token = generateFakeToken();
  const { password: _password, ...safe } = user;

  return { user: safe, token };
};
