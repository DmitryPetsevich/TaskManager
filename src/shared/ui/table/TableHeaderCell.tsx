import clsx from 'clsx';
import type { ThHTMLAttributes } from 'react';

export type Align = 'left' | 'right' | 'center';

type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  align?: Align;
  sticky?: boolean;
};

const alignClass: Record<Align, string> = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
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
      className,
    )}
    {...props}
  >
    <div
      className={clsx('min-h-10 px-4 py-2 flex items-center', alignClass[align])}
      data-testid="children-container-id"
    >
      {children}
    </div>
  </th>
);
