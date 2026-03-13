import type { ReactNode } from 'react';

export type OpenDialogFunc = (content: ReactNode) => void;
export type CloseDialogFunc = () => void;

export type DialogContextType = {
  open: OpenDialogFunc;
  close: CloseDialogFunc;
};
