import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { Select } from '@shared/ui/select/Select';
import { createTaskSchema, type TaskFormValues } from '@entities/task/model/schema';
import { priorityOptions, statusOptions } from '@entities/task/model/constants';
import { useCreateTask } from '@features/task/create-task/model/useCreateTask';
import { createTaskDto } from '@entities/task/lib/createTaskDto';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { createTaskInitialValues } from '@entities/task/model/initialValues';
import { useTasksFromQueryCache } from '@entities/task/lib/hooks/useTasksFromQueryCache';
import { useTaskDependencyOptions } from '@entities/task/lib/hooks/useTaskDependencyOptions';
import type { ITaskDto } from '@entities/task/model/types';
import { useUpdateTask } from '@features/task/update-task/model/useUpdateTask';
import { createUpdatedTaskDto } from '@entities/task/lib/createUpdatedTaskDto';

type Props = {
  projectId: string;
  task?: ITaskDto;
};

export const TaskForm = ({ projectId, task }: Props) => {
  const tasks = useTasksFromQueryCache(projectId);
  const taskDepsOptions = useTaskDependencyOptions(projectId, task?.id);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(createTaskSchema(tasks, task)),
    defaultValues: createTaskInitialValues(task),
  });

  const { close } = useDialog();
  const createTaskMutation = useCreateTask(projectId);
  const updateTaskMutation = useUpdateTask(projectId);

  const onSubmit = (data: TaskFormValues) => {
    if (task) {
      updateTaskMutation.mutate({ id: task.id, data: createUpdatedTaskDto(task, data) });
    } else {
      createTaskMutation.mutate(createTaskDto(projectId, data));
    }

    close();
  };

  const { register, handleSubmit, formState, control } = form;

  return (
    <form className="pt-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name')}
        label="Name"
        error={formState.errors.name && formState.errors.name.message}
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Status"
            options={statusOptions}
            value={field.value}
            onChange={(option) => field.onChange(option)}
            error={formState.errors.status && formState.errors.status.message}
          />
        )}
      />
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <Select
            label="Priority"
            options={priorityOptions}
            value={field.value}
            onChange={(option) => field.onChange(option)}
            error={formState.errors.priority && formState.errors.priority.message}
          />
        )}
      />
      <Controller
        name="dependOn"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Depend On"
            options={taskDepsOptions}
            value={field.value}
            onChange={field.onChange}
            error={formState.errors.dependOn?.message}
          />
        )}
      />
      <div className="flex pt-2 justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};
