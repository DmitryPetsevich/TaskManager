import z from 'zod';
import { TASK_PRIORITIES, TASK_STATUSES } from '@entities/task/model/constants';
import type { ITaskDto } from '@entities/task/model/types';
import { buildDAGraph } from '@entities/task/lib/graph/buildDAGraph';
import { createTaskDto } from '@entities/task/lib/createTaskDto';
import { checkCycle } from '@entities/task/lib/graph/checkCycle';

export const createTaskSchema = (tasks: ITaskDto[], task?: ITaskDto) =>
  z
    .object({
      name: z.string().trim().min(3, 'Task name must contain at least 3 characters'),
      status: z.enum(TASK_STATUSES),
      priority: z.enum(TASK_PRIORITIES),
      dependOn: z.array(z.string()).default([]),
    })
    .refine(
      (data) => {
        const newTasks = tasks.map((t) => (t.id === task?.id ? { ...t, ...data } : t));

        if (!task) newTasks.push(createTaskDto('tempId', data));

        const graph = buildDAGraph(newTasks);

        return !checkCycle(graph);
      },
      {
        message: 'Dependency creates a cycle',
        path: ['dependOn'],
      },
    );

export type TaskFormValues = z.input<ReturnType<typeof createTaskSchema>>;
