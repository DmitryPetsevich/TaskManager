import { buildDAGraph, checkCycle, createTaskEntity, schema, type TaskDTO } from '@entities/task';

export const createTaskSchema = (tasks: TaskDTO[], task: TaskDTO) =>
  schema.refine(
    (data) => {
      const newTasks = tasks.map((t) => (t.id === task?.id ? { ...t, ...data } : t));

      if (!task) newTasks.push(createTaskEntity('tempId', data));

      const graph = buildDAGraph(newTasks);

      return !checkCycle(graph);
    },
    {
      message: 'Dependency creates a cycle',
      path: ['dependOn'],
    },
  );
