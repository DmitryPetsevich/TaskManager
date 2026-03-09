import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
vi.mock('@features/auth/ui/logout-button/LogoutButton', () => ({
  LogoutButton: () => <button>Logout</button>,
}));
import { SidebarFooter } from '@widgets/sidebar/SidebarFooter';

describe('SidebarFooter', () => {
  test('Should render logout button', () => {
    render(<SidebarFooter />);

    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
