import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@shared/ui/button/Button';

describe('Button:', () => {
  test('Should render children', () => {
    const text = 'Submit';

    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Should be disabled when isLoading prop is true', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Should show default loading label when isLoading prop is true', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Should call onClick handler', () => {
    const mockFn = vi.fn();

    render(<Button onClick={mockFn}>Click</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
