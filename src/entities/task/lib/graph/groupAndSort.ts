import type { TaskDTO } from '../../model/types';
import { buildDAGraph } from './buildDAGraph';
import { getComponents } from './getComponents';
import { topologicalSort } from './topologicalSort';

export function groupAndSort(tasks: TaskDTO[]): TaskDTO[][] {
  const graph = buildDAGraph(tasks);
  const components = getComponents(graph);

  return components.map((componentIds) => {
    const group = tasks.filter((t) => componentIds.includes(t.id));

    return topologicalSort(group);
  });
}
