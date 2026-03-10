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
      'bg-gray-800',
      'text-xs font-semibold uppercase text-white',
      sticky && 'sticky top-0 z-10',
      alignClass[align],
      className,
    )}
    {...props}
  >
    <div className="min-h-10 px-4 py-2 flex items-center">{children}</div>
  </th>
);
