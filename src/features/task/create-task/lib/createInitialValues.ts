import type { TaskFormInput } from '@entities/task';

export const createInitialValues = (): TaskFormInput => ({
  name: '',
  status: 'In Progress',
  priority: 'Medium',
  dependOn: [],
});
