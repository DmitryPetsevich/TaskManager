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
      rounded-sm
      bg-blue-900
      py-1.5
      px-3.5
      min-w-[96px]
      text-white
      font-medium
      hover:opacity-90
      cursor-pointer
      disabled:opacity-50
      disabled:cursor-not-allowed
      ${className}
    `}
  >
    {isLoading ? isLoadingLabel : children}
  </button>
);
