import type { IUserDto } from '@entities/user/user.types';
import { api } from '@shared/api/axios';

export const getUsers = async (): Promise<IUserDto[]> => {
  const response = await api.get<IUserDto[]>('/users');

  return response.data;
};
