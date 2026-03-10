import type { ReactNode } from 'react';

type Props = {
  title: string;
  action?: ReactNode;
};

export const PageHeader = ({ title, action }: Props) => (
  <header className="h-12 px-4 flex items-center justify-between border-b border-gray-200">
    <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    {action}
  </header>
);
