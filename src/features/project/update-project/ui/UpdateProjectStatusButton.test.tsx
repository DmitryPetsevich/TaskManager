import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import type { IProjectDto, ProjectStatus } from '@entities/project/model/types';
import { UpdateProjectStatusButton } from '@features/project/update-project/ui/UpdateProjectStatusButton';

const mutateMock = vi.fn();
vi.mock('../model/useUpdateProject', () => ({
  useUpdateProject: () => ({ mutate: mutateMock }),
}));

const createMockProject = (status: ProjectStatus): IProjectDto => ({
  id: '1',
  status,
  createdAt: '',
  name: 'Project',
});

describe('UpdateProjectStatusButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should not render button if project is Done', () => {
    const project = createMockProject('Done');

    render(<UpdateProjectStatusButton project={project} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('Should render MdPause icon if project is In Progress', () => {
    const project = createMockProject('In Progress');

    render(<UpdateProjectStatusButton project={project} />);

    expect(screen.getByTestId('icon-pause')).toBeInTheDocument();
  });

  test('Should render MdPlayArrow icon if project is Paused', () => {
    const project = createMockProject('Paused');

    render(<UpdateProjectStatusButton project={project} />);

    expect(screen.getByTestId('icon-play-arrow')).toBeInTheDocument();
  });

  test('Should call mutate with correct status when button is clicked', async () => {
    const project = createMockProject('In Progress');

    render(<UpdateProjectStatusButton project={project} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(mutateMock).toBeCalledWith({ id: '1', data: { status: 'Paused' } });
  });
});
