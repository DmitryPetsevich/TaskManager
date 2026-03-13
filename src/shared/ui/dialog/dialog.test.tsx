import type { ReactNode } from 'react';
import { describe, expect, test } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { DialogProvider } from '@shared/ui/dialog/DialogProvider';

const OPEN_BUTTON_TEXT = 'Open';
const CLOSE_BUTTON_TEXT = 'Close';
const TEST_CONTENT_TEXT = 'Test content text';

function Children() {
  const { open, close } = useDialog();

  return (
    <>
      <button onClick={() => open(<div>{TEST_CONTENT_TEXT}</div>)}>{OPEN_BUTTON_TEXT}</button>
      <button onClick={close}>{CLOSE_BUTTON_TEXT}</button>
    </>
  );
}

function setupUserAndRender(ui: ReactNode) {
  const user = userEvent.setup();

  render(<DialogProvider>{ui}</DialogProvider>);

  return user;
}

describe('Dialog', () => {
  test('Should throw error when useDialog is used outside DialogProvider', () => {
    expect(() => renderHook(() => useDialog())).toThrow(
      /^useDialog must be used within DialogProvider$/,
    );
  });

  test('Should open dialog with provided content', async () => {
    const user = setupUserAndRender(<Children />);

    await user.click(screen.getByText(OPEN_BUTTON_TEXT));

    expect(screen.getByText(TEST_CONTENT_TEXT)).toBeInTheDocument();
  });

  test('Should close dialog when close() is called', async () => {
    const user = setupUserAndRender(<Children />);

    await user.click(screen.getByText(OPEN_BUTTON_TEXT));
    expect(screen.getByText(TEST_CONTENT_TEXT)).toBeInTheDocument();

    await user.click(screen.getByText(CLOSE_BUTTON_TEXT));
    expect(screen.queryByText(TEST_CONTENT_TEXT)).not.toBeInTheDocument();
  });

  test('Should close dialog when Escape is pressed', async () => {
    const user = setupUserAndRender(<Children />);

    await user.click(screen.getByText(OPEN_BUTTON_TEXT));

    expect(screen.getByText(TEST_CONTENT_TEXT)).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByText(TEST_CONTENT_TEXT)).not.toBeInTheDocument();
  });

  test('Should lock scroll when dialog is open', async () => {
    const user = setupUserAndRender(<Children />);

    await user.click(screen.getByText(OPEN_BUTTON_TEXT));

    expect(document.body.style.overflow).toBe('hidden');
  });
});
