import { LoginForm } from '@features/auth/ui/LoginForm';

const AuthPage = () => {
  return (
    <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 animate-[fadeIn_0.6s_ease-out]">
      <h1 className="text-2xl font-bold text-center mb-6">Вход в аккаунт</h1>
      <LoginForm />
    </div>
  );
};

export default AuthPage;
