import clsx from 'clsx';
import { useId, type InputHTMLAttributes } from 'react';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const TextField = ({ label, error, className, id, ...props }: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1 mb-2 last:mb-0">
      {label && (
        <label htmlFor={inputId} className="text-sm text-gray-400">
          {label}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        className={clsx(
          'w-full bg-white/20 px-4 py-2.5 border border-gray-400 rounded-sm',
          'focus:outline-none focus:ring-2 focus:ring-blue-800',
          'transition',
          error && 'border-red-400 focus:ring-red-400',
          className,
        )}
      />

      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
};
