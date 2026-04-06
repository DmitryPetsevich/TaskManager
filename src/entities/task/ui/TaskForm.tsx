import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { Select, type SelectOption } from '@shared/ui/select/Select';
import { type TaskFormInput, type TaskFormSchema } from '../model/schema';
import { TASK_PRIORITIES, TASK_STATUSES } from '../model/constants';
import { mapToOptions } from '@shared/lib/mapToOptions';

type Props = {
  schema: TaskFormSchema;
  defaultValues?: TaskFormInput;
  taskDepsOptions?: SelectOption[];
  onSubmit: (data: TaskFormInput) => void;
};

export const TaskForm = ({ schema, defaultValues, taskDepsOptions = [], onSubmit }: Props) => {
  const form = useForm<TaskFormInput>({
    resolver: zodResolver(schema),
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
            options={mapToOptions(TASK_STATUSES)}
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
            options={mapToOptions(TASK_PRIORITIES)}
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
        <Button type="submit">OK</Button>
      </div>
    </form>
  );
};
