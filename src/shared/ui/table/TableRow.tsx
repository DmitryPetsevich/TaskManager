import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = ({ children, className, ...props }: TableRowProps) => (
  <tr
    className={clsx(
      'border-b border-gray-200',
      'hover:bg-gray-50 transition-colors',
      'will-change-[background-color]',
      className,
    )}
    {...props}
  >
    {children}
  </tr>
);
