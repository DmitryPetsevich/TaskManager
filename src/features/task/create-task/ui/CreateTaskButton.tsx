import clsx from 'clsx';
import { useCallback } from 'react';
import { Button } from '@shared/ui/button/Button';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { CreateTaskDialog } from './CreateTaskDialog';

type Props = {
  projectId: string;
  isPulse?: boolean;
  disabled?: boolean;
};

export const CreateTaskButton = ({ projectId, isPulse = false, disabled = false }: Props) => {
  const { open } = useDialog();

  const handleClick = useCallback(() => {
    open(<CreateTaskDialog projectId={projectId} />);
  }, [projectId, open]);

  return (
    <Button onClick={handleClick} disabled={disabled} className={clsx(isPulse && 'animate-pulse')}>
      New Task
    </Button>
  );
};
