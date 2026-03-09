import clsx from 'clsx';
import { useState } from 'react';
import { SidebarFooter } from '@widgets/sidebar/SidebarFooter';
import { SidebarHeader } from '@widgets/sidebar/SidebarHeader';
import { SidebarMenu } from '@widgets/sidebar/SidebarMenu';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        'flex h-full flex-col',
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
