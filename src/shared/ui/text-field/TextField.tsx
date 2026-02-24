import type { InputHTMLAttributes } from 'react';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const TextField = ({ label, error, className, ...props }: TextFieldProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm text-gray-600">{label}</label>}

    <input
      {...props}
      className={`        
        w-full
        bg-white/20
        px-4 py-2.5
        border border-gray-300
        rounded-lg
        p-2.5
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition
        ${error ? 'border-red-400 focus:ring-red-400' : ''}
        ${className}`}
    />

    {error && <span className="text-sm text-red-300">{error}</span>}
  </div>
);
