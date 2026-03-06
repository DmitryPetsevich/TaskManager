import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableHead = ({ children, className, ...props }: TableHeadProps) => (
  <thead className={clsx(className)} {...props}>
    {children}
  </thead>
);
