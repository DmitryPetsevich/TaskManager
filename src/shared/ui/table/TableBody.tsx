import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = ({ children, className, ...props }: TableBodyProps) => (
  <tbody className={clsx(className)} {...props}>
    {children}
  </tbody>
);
