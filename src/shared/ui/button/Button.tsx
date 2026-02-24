import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isLoadingLabel?: string;
};

export const Button = ({
  children,
  isLoading,
  className,
  isLoadingLabel = 'Loading...',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading || props.disabled}
    className={`
        w-full
        rounded-lg
        bg-blue-600
        py-2.5
        text-white
        font-medium
        hover:bg-blue-700
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
  >
    {isLoading ? isLoadingLabel : children}
  </button>
);
