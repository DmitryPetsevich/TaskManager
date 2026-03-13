import { createContext } from 'react';
import type { DialogContextType } from '@shared/ui/dialog/types';

export const DialogContext = createContext<DialogContextType | null>(null);
