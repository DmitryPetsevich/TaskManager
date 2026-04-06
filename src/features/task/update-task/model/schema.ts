import { buildDAGraph, checkCycle, schema, type TaskDTO } from '@entities/task';
import { createTaskData } from '@features/task/create-task/lib/createTaskData';

export const createTaskSchema = (tasks: TaskDTO[], task: TaskDTO) =>
  schema.refine(
    (data) => {
      const newTasks = tasks.map((t) => (t.id === task?.id ? { ...t, ...data } : t));

      if (!task) newTasks.push(createTaskData('tempId', data));

      const graph = buildDAGraph(newTasks);

      return !checkCycle(graph);
    },
    {
      message: 'Dependency creates a cycle',
      path: ['dependOn'],
    },
  );
