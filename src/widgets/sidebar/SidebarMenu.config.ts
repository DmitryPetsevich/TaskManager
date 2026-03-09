import type { IconType } from 'react-icons';
import { MdFolder } from 'react-icons/md';
import { ROUTES } from '@app/router/routes';

export type SidebarMenuItem = {
  label: string;
  icon: IconType;
  to: string;
};

export const sidebarMenu: SidebarMenuItem[] = [
  {
    label: 'Projects',
    icon: MdFolder,
    to: ROUTES.projects,
  },
];
