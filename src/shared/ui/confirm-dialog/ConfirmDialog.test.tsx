import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { ConfirmDialog } from '@shared/ui/confirm-dialog/ConfirmDialog';

describe('ConfirmDialog', () => {
  test('Should render title, question and confirm button text', () => {
    const title = 'Delete Project';
    const question = 'Question?';
    const confirmText = 'Confirm';

    render(<ConfirmDialog title={title} question={question} confirmText={confirmText} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByText(confirmText)).toBeInTheDocument();
  });

  test('Should call onCancel if cancel IconButton is clicked', async () => {
    const onCancelMock = vi.fn();

    render(
      <ConfirmDialog
        title="Delete Project"
        question="Are you sure?"
        confirmText="DELETE"
        onCancel={onCancelMock}
      />,
    );

    await userEvent.click(screen.getByTestId('icon-button-cancel'));

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  test('Should call onConfirm if confirm Button is clicked', async () => {
    const onConfirmMock = vi.fn();
    render(
      <ConfirmDialog
        title="Delete Project"
        question="Are you sure?"
        confirmText="DELETE"
        onConfirm={onConfirmMock}
      />,
    );

    await userEvent.click(screen.getByTestId('button-confirm'));

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
