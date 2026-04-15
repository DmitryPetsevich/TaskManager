import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'success' | 'warning' | 'danger';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isLoadingLabel?: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-800 text-white',
  success: 'bg-green-700 text-white',
  warning: 'bg-orange-600 text-white',
  danger: 'bg-red-700 text-white',
};

export const Button = ({
  children,
  isLoading,
  className,
  isLoadingLabel = 'Loading...',
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading || props.disabled}
    className={clsx(
      'min-h-[40px] min-w-[96px] py-2 px-3.5 rounded-sm',
      'text-sm font-medium',
      'hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed',
      'cursor-pointer',
      variants[variant],
      className,
    )}
  >
    {isLoading ? isLoadingLabel : children}
  </button>
);
