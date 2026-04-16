import { useForm } from 'react-hook-form';
import { MdChecklist } from 'react-icons/md';
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
    <div className="w-full max-w-md flex flex-col gap-4">
      <div className="flex justify-center">
        <div className="flex justify-center items-center bg-gray-800 w-[40px] h-[40px] border rounded-full">
          <MdChecklist size="32px" color="white" />
        </div>
      </div>
      <h1 className="text-xl text-center text-gray-800 font-medium">Sign in to TaskManager</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <div className="flex justify-center items-center p-4 border border-gray-400 bg-red-100 rounded-sm">
            <span className="text-sm font-light">Incorrect email or password.</span>
          </div>
        )}

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

        <Button
          type="submit"
          isLoading={isPending}
          isLoadingLabel="Signing in..."
          variant="success"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};
