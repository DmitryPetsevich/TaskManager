import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { IconButton } from '@shared/ui/icon-button/IconButton';

describe('IconButton', () => {
  test('Should render provided icon', () => {
    const id = 'icon-test-id';

    render(<IconButton icon={<span data-testid={id} />} />);

    expect(screen.getByTestId(id)).toBeInTheDocument();
  });

  test('Should apply right buttonSize class', () => {
    const id = 'icon-button-test-id';

    render(<IconButton data-testid={id} size="lg" icon={<span />} />);

    expect(screen.getByTestId(id)).toHaveClass('h-12', 'w-12');
  });

  test('Should apply right iconSize class', () => {
    const id = 'icon-test-id';

    render(<IconButton size="lg" icon={<svg data-testid={id} />} />);

    expect(screen.getByTestId(id).closest('span')).toHaveClass('text-xl');
  });

  test('Should merge custom className', () => {
    const id = 'icon-button-test-id';
    const className = 'custom-className';

    render(<IconButton data-testid={id} icon={<span />} className={className} />);

    expect(screen.getByTestId(id)).toHaveClass(className);
  });

  test('Should call onClick handler', () => {
    const mockFn = vi.fn();
    const id = 'icon-button-test-id';

    render(<IconButton data-testid={id} onClick={mockFn} icon={<span />} />);

    const button = screen.getByTestId(id);

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
