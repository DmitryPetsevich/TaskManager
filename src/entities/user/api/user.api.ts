import { api } from '@shared/api/axios';
import { generateFakeToken } from '@shared/lib/authToken';
import type { IUserDto } from '@entities/user/model/types';

const getUsers = async (): Promise<IUserDto[]> => {
  const response = await api.get<IUserDto[]>('/users');

  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const users = await getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error('Invalid credentails');

  const token = generateFakeToken();
  const { password: _password, ...safe } = user;

  return { user: safe, token };
};
