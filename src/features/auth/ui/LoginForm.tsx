import { useState, type SyntheticEvent } from 'react';
import { useLogin } from '@features/auth/hooks/useLogin';
import { TextField } from '@shared/ui/text-field/TextField';
import { Button } from '@shared/ui/button/Button';

export const LoginForm = () => {
  const loginMutation = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {loginMutation.isError && (
        <div className="text-red-500 text-sm">Неверный email или пароль</div>
      )}

      <Button type="submit" isLoading={loginMutation.isPending} isLoadingLabel="Вход...">
        Войти
      </Button>
    </form>
  );
};
