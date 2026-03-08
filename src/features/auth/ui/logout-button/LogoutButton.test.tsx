import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { LogoutButton } from '@features/auth/ui/logout-button/LogoutButton';
import * as useLogoutModule from '@features/auth/hooks/useLogout';

describe('LogoutButton', () => {
  test('Should call onClick handler', () => {
    const mockFn = vi.fn();
    vi.spyOn(useLogoutModule, 'useLogout').mockReturnValue(mockFn);

    render(<LogoutButton />);

    const button = screen.getByLabelText('logout-button');
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
