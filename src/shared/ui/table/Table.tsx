import clsx from 'clsx';
import { useMemo, type TableHTMLAttributes } from 'react';

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  scrollHeight?: number | string;
};

export const Table = ({ children, className, scrollHeight, ...props }: TableProps) => {
  const containerStyle = useMemo(
    () => (scrollHeight === undefined ? undefined : { maxHeight: scrollHeight, overflow: 'auto' }),
    [scrollHeight],
  );

  return (
    <div data-testid="table-container" style={containerStyle}>
      <table className={clsx('min-w-full border-collapse', className)} {...props}>
        {children}
      </table>
    </div>
  );
};
