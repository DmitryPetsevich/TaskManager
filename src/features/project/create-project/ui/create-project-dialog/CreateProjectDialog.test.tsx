import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { CreateProjectDialog } from '@features/project/create-project/ui/create-project-dialog/CreateProjectDialog';
import type { ProjectFormInput } from '@entities/project';

const closeMock = vi.fn();
vi.mock('@shared/ui/dialog/useDialog', () => ({
  useDialog: () => ({ close: closeMock }),
}));

const mutateMock = vi.fn();
vi.mock('../../model/useCreateProject', () => ({
  useCreateProject: () => ({ mutate: mutateMock }),
}));

vi.mock('@entities/project/ui/ProjectForm', () => ({
  ProjectForm: ({ onSubmit }: { onSubmit: (data: ProjectFormInput) => void }) => (
    <button onClick={() => onSubmit({ name: 'Test Project' })}>Submit Form</button>
  ),
}));

describe('CreateProjectDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should call close when close icon is clicked', async () => {
    render(<CreateProjectDialog />);

    await userEvent.click(screen.getByTestId('icon-button-close'));

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  test('Should call mutate and close when form is submitted', async () => {
    render(<CreateProjectDialog />);

    await userEvent.click(screen.getByText('Submit Form'));

    expect(mutateMock).toHaveBeenCalledTimes(1);
    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});
