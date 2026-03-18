import { buildDAGraph } from '@entities/task/lib/graph/buildDAGraph';
import { getComponents } from '@entities/task/lib/graph/getComponents';
import { topoSort } from '@entities/task/lib/graph/topologicalSort';
import type { ITaskDto } from '@entities/task/model/types';

export function groupAndSort(tasks: ITaskDto[]): ITaskDto[][] {
  const graph = buildDAGraph(tasks);
  const components = getComponents(graph);

  return components.map((componentIds) => {
    const group = tasks.filter((t) => componentIds.includes(t.id));

    return topoSort(group);
  });
}
