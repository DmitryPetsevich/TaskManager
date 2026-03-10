import { MdMenu, MdClose } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';

type Props = {
  collapsed: boolean;
  onToggle: () => void;
};

export const SidebarHeader = ({ collapsed, onToggle }: Props) => (
  <div className="h-12 flex justify-end p-1 border-b border-gray-200">
    <IconButton onClick={onToggle} icon={collapsed ? <MdMenu /> : <MdClose />} />
  </div>
);
