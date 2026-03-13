import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LogoutButton } from '@features/auth/ui/logout-button/LogoutButton';
import * as useLogoutModule from '@features/auth/hooks/useLogout';

describe('LogoutButton', () => {
  test('Should call onClick handler', async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    vi.spyOn(useLogoutModule, 'useLogout').mockReturnValue(mockFn);

    render(<LogoutButton />);

    const button = screen.getByLabelText('logout-button');

    await user.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
