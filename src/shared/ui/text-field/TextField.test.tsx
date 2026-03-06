import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextField } from '@shared/ui/text-field/TextField';

describe('TextField:', () => {
  test('Should render input', () => {
    render(<TextField />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Should render label if label prop is provided', () => {
    const label = 'Email';

    render(<TextField label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  test('Should render error message if error prop is provided', () => {
    const error = 'Error';

    render(<TextField error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });

  test('Should apply error styles if error prop is provided', () => {
    render(<TextField error="Error" />);

    const textfield = screen.getByRole('textbox');

    expect(textfield).toHaveClass('border-red-400');
    expect(textfield).toHaveClass('focus:ring-red-400');
  });

  test('Should merge custom className', () => {
    const className = 'custom-class';

    render(<TextField className={className} />);

    expect(screen.getByRole('textbox')).toHaveClass(className);
  });

  test('Should call onChange handler', () => {
    const mockFn = vi.fn();

    render(<TextField onChange={mockFn} />);

    const textfield = screen.getByRole('textbox');

    fireEvent.change(textfield, { target: { value: 'test' } });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
