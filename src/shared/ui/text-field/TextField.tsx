import clsx from 'clsx';
import { useId, type InputHTMLAttributes, type LabelHTMLAttributes } from 'react';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

export const TextField = ({
  id,
  error,
  className,
  label,
  labelProps,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          {...labelProps}
          className={clsx('text-sm font-medium text-gray-800', labelProps?.className)}
        >
          {label}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        className={clsx(
          'min-h-[40px] w-full bg-white px-3 py-1.5 border border-gray-300 rounded-sm',
          'font-light',
          'focus:outline-none focus:ring-2 focus:ring-blue-800',
          'transition',
          error && 'border-red-500 focus:ring-red-500',
          className,
        )}
      />

      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};
