export type TaskStatus = 'In Progress' | 'Paused' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface ITaskDto {
  id: string;
  projectId: string;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  dependOn: string[];
  createdAt: string;
  updatedAt: string;
}
