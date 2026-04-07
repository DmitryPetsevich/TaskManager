import clsx from 'clsx';
import { Button } from '@shared/ui/button/Button';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { CreateProjectDialog } from '../create-project-dialog/CreateProjectDialog';

type Props = {
  isPulse?: boolean;
  disabled?: boolean;
};

export const CreateProjectButton = ({ isPulse = false, disabled = false }: Props) => {
  const { open } = useDialog();

  return (
    <Button
      disabled={disabled}
      className={clsx(isPulse && 'animate-pulse')}
      onClick={() => open(<CreateProjectDialog />)}
    >
      New Project
    </Button>
  );
};
