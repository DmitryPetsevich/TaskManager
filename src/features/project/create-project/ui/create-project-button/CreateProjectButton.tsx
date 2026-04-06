import clsx from 'clsx';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { Button } from '@shared/ui/button/Button';
import { CreateProjectDialog } from '@features/project/create-project/ui/create-project-dialog/CreateProjectDialog';

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
