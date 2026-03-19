import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { taskSchema, type TaskFormValues } from '@entities/task/model/schema';
import { priorityOptions, statusOptions } from '@entities/task/model/constants';
import { Select } from '@shared/ui/select/Select';

type Props = {
  defaultValues?: TaskFormValues;
  onSubmit: (data: TaskFormValues) => void;
};

export const TaskForm = ({ defaultValues, onSubmit }: Props) => {
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues,
  });

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
      <div className="flex pt-2 justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};
