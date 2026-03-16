import { createPortal } from 'react-dom';
import { useEffect, useRef, type ReactNode } from 'react';
import type { CloseDialogFunc } from '@shared/ui/dialog/types';

type Props = {
  content: ReactNode | null;
  close: CloseDialogFunc;
};

export const DialogRoot = ({ content, close }: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!content) return;

    const overflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [content]);

  useEffect(() => {
    if (!content) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [content, close]);

  useEffect(() => {
    if (!content) return;

    const focusable = dialogRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (!focusable) return;

    focusable.focus();
  }, [content]);

  if (!content) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      <div
        className="min-w-xl max-w-[70vw] max-h-[80vh] overflow-auto bg-white rounded-sm shadow-md p-4"
        ref={dialogRef}
      >
        {content}
      </div>
    </div>,
    document.body,
  );
};
