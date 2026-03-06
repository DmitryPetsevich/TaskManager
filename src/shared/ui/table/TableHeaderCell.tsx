import clsx from 'clsx';
import type { ThHTMLAttributes } from 'react';

type Align = 'left' | 'right' | 'center';

type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  align?: Align;
  sticky?: boolean;
};

const alignClass: Record<Align, string> = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

export const TableHeaderCell = ({
  children,
  align = 'left',
  sticky = true,
  className,
  ...props
}: TableHeaderCellProps) => (
  <th
    className={clsx(
      'px-3 py-2 bg-gray-50',
      'text-xs font-semibold uppercase text-gray-600',
      sticky && 'sticky top-0 z-10',
      alignClass[align],
      className,
    )}
    {...props}
  >
    {children}
  </th>
);
