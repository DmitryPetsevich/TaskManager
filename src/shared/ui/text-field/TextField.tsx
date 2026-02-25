import { useId, type InputHTMLAttributes } from 'react';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const TextField = ({ label, error, className, id, ...props }: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm text-gray-600">
          {label}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        className={`        
          w-full
          bg-white/20
          px-4 py-2.5
          border border-gray-300
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          ${error ? 'border-red-400 focus:ring-red-400' : ''}
          ${className ?? ''}
        `}
      />

      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
};
