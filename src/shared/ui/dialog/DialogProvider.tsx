import { useState, useCallback, useMemo, type ReactNode } from 'react';
import { DialogContext } from '@shared/ui/dialog/DialogContext';
import { DialogRoot } from '@shared/ui/dialog/DialogRoot';
import type { CloseDialogFunc, OpenDialogFunc } from '@shared/ui/dialog/types';

type Props = {
  children: ReactNode;
};

export const DialogProvider = ({ children }: Props) => {
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = useCallback<OpenDialogFunc>((node) => {
    setContent(node);
  }, []);

  const close = useCallback<CloseDialogFunc>(() => {
    setContent(null);
  }, []);

  const contextValue = useMemo(() => ({ open, close }), [open, close]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogRoot content={content} close={close} />
    </DialogContext.Provider>
  );
};
