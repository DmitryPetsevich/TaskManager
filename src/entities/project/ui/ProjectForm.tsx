import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { schema, type ProjectFormInput } from '../model/schema';

type Props = {
  defaultValues?: ProjectFormInput;
  onSubmit: (data: ProjectFormInput) => void;
};

export const ProjectForm = ({ defaultValues, onSubmit }: Props) => {
  const form = useForm<ProjectFormInput>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { register, handleSubmit, formState } = form;

  return (
    <form className="pt-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name')}
        label="Name"
        error={formState.errors.name && formState.errors.name.message}
      />
      <div className="flex pt-2 justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
};
