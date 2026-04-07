import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { useLogin } from '../model/useLogin';
import { loginSchema, type LoginFormInput } from '../model/schema';

export const LoginForm = () => {
  const { mutate, isPending, isError } = useLogin();

  const form = useForm<LoginFormInput>({
    resolver: zodResolver(loginSchema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = (data: LoginFormInput) => {
    mutate(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email')}
        label="Email"
        error={formState.errors.email && formState.errors.email.message}
      />
      <TextField
        {...register('password')}
        label="Password"
        error={formState.errors.password && formState.errors.password.message}
      />

      {isError && <div className="text-red-500 text-sm">Invalid email or password</div>}

      <Button type="submit" isLoading={isPending} isLoadingLabel="Signing In...">
        Sign In
      </Button>
    </form>
  );
};
