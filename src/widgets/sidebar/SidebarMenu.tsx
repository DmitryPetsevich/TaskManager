import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { sidebarMenu } from './SidebarMenu.config';

type Props = {
  collapsed: boolean;
};

export const SidebarMenu = ({ collapsed }: Props) => (
  <nav className="flex-1 min-h-0 p-1 space-y-1 overflow-x-hidden overflow-y-auto">
    {sidebarMenu.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            clsx('flex items-center gap-1', 'hover:bg-gray-200', isActive && 'bg-gray-200')
          }
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center">
            <Icon />
          </span>

          <span
            className={clsx(
              collapsed ? 'opacity-0' : 'opacity-100',
              'transition-all duration-300',
              'truncate min-w-0',
            )}
          >
            {item.label}
          </span>
        </NavLink>
      );
    })}
  </nav>
);
