import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type IconButtonSize = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  size?: IconButtonSize;
  ariaLabel?: string;
  className?: string;
};

const buttonSize: Record<IconButtonSize, string> = {
  sm: 'h-8 w-8 p-1',
  md: 'h-10 w-10 p-2',
  lg: 'h-12 w-12 p-3',
};

const iconSize: Record<IconButtonSize, string> = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl',
};

export const IconButton = ({ icon, size = 'md', ariaLabel = '', className, ...props }: Props) => (
  <button
    className={clsx(
      'inline-flex items-center justify-center',
      'rounded-full hover:bg-gray-200 hover:cursor-pointer',
      'transition-colors',
      'disabled:opacity-50 disabled:pointer-events-none',
      buttonSize[size],
      className,
    )}
    aria-label={ariaLabel}
    {...props}
  >
    <span className={iconSize[size]}>{icon}</span>
  </button>
);
