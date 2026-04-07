import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ProjectDTO } from '@entities/project';
import { DeleteProjectButton } from './DeleteProjectButton';

const openMock = vi.fn();
const closeMock = vi.fn();
vi.mock('@shared/ui/dialog/useDialog', () => ({
  useDialog: () => ({
    open: openMock,
    close: closeMock,
  }),
}));

const mutateMock = vi.fn();
vi.mock('../model/useDeleteProject', () => ({
  useDeleteProject: () => ({ mutate: mutateMock }),
}));

describe('DeleteProjectButton', () => {
  const project: ProjectDTO = {
    id: '1',
    name: 'Project Test',
    createdAt: '',
    status: 'In Progress',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should call open when button is clicked', async () => {
    render(<DeleteProjectButton project={project} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(openMock).toHaveBeenCalledTimes(1);
  });

  test('Should call mutate and close when handleDelete is invoked', async () => {
    render(<DeleteProjectButton project={project} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    const confirmDialogProps = openMock.mock.calls[0][0].props;

    confirmDialogProps.onConfirm();

    expect(mutateMock).toHaveBeenCalledWith(project.id);
    expect(closeMock).toHaveBeenCalled();
  });
});
