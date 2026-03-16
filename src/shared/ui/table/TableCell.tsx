import clsx from 'clsx';
import type { TdHTMLAttributes } from 'react';

type Align = 'left' | 'right' | 'center';

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  align?: Align;
};

const alignClass: Record<Align, string> = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
};

export const TableCell = ({ children, align = 'left', className, ...props }: TableCellProps) => (
  <td className={clsx('text-sm text-gray-900', className)} {...props}>
    <div
      className={clsx('min-h-10 px-4 py-2 flex items-center', alignClass[align])}
      data-testid="children-container-id"
    >
      {children}
    </div>
  </td>
);
