import { LoginForm } from '@features/auth/login';
import { usePageTitle } from '@shared/lib/hooks/usePageTitle';

const AuthPage = () => {
  usePageTitle('Sign in to TaskManager');

  return <LoginForm />;
};

export default AuthPage;
