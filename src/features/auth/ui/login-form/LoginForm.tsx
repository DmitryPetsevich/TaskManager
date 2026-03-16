import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@features/auth/model/useLogin';
import { Button } from '@shared/ui/button/Button';
import { TextField } from '@shared/ui/text-field/TextField';
import { loginSchema, type LoginFormValues } from '@features/auth/model/login.schema';

export const LoginForm = () => {
  const { mutate, isPending, isError } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = (data: LoginFormValues) => {
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
