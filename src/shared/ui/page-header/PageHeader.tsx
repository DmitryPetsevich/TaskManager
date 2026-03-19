import type { ReactNode } from 'react';

type Props = {
  title?: string;
  action?: ReactNode;
};

export const PageHeader = ({ title, action }: Props) => (
  <header className="h-12 px-4 p-2 flex items-center gap-2 justify-between border-b border-gray-200">
    {title ? (
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    ) : (
      <div
        className="flex-1 h-full bg-gray-200 rounded animate-pulse"
        data-testid="page-header-skeleton"
      />
    )}

    {action}
  </header>
);
