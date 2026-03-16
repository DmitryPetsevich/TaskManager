import { MdClose } from 'react-icons/md';
import { Button } from '@shared/ui/button/Button';
import { IconButton } from '@shared/ui/icon-button/IconButton';

type Props = {
  title: string;
  question: string;
  confirmText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const ConfirmDialog = ({
  title,
  question,
  confirmText,
  onConfirm = () => {},
  onCancel = () => {},
}: Props) => (
  <div className="flex flex-col min-w-[320px]">
    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <IconButton onClick={onCancel} icon={<MdClose />} data-testid="icon-button-cancel" />
    </div>
    <div className="pt-2 pb-8">{question}</div>
    <Button onClick={onConfirm} data-testid="button-confirm">
      {confirmText}
    </Button>
  </div>
);
