import clsx from 'clsx';
import type { TdHTMLAttributes } from 'react';

type Align = 'left' | 'right' | 'center';

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  align?: Align;
};

const alignClass: Record<Align, string> = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

export const TableCell = ({ children, align = 'left', className, ...props }: TableCellProps) => (
  <td
    className={clsx('px-3 py-2', 'text-sm text-gray-900', alignClass[align], className)}
    {...props}
  >
    {children}
  </td>
);
