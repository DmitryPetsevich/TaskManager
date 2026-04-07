import clsx from 'clsx';
import { useState } from 'react';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        'flex flex-col',
        'border-r border-gray-200',
        'bg-gray-50',
        'overflow-hidden',
        collapsed ? 'w-12' : 'w-64',
        'transition-[width] duration-300',
      )}
    >
      <SidebarHeader collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      <SidebarMenu collapsed={collapsed} />
      <SidebarFooter />
    </aside>
  );
};
