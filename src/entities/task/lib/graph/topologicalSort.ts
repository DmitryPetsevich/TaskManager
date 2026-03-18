import { buildDAGraph } from '@entities/task/lib/graph/buildDAGraph';
import type { ITaskDto } from '@entities/task/model/types';

export function topoSort(tasks: ITaskDto[]): ITaskDto[] {
  const graph = buildDAGraph(tasks);
  const indeg: Record<string, number> = {};
  const taskMap = new Map();

  tasks.forEach((t) => {
    indeg[t.id] = t.dependOn.length;
    taskMap.set(t.id, t);
  });

  let q = Object.keys(indeg).filter((id) => indeg[id] === 0);
  const order: string[] = [...q];

  while (q.length) {
    const nextq: string[] = [];

    for (let node of q) {
      for (let n of graph[node]) {
        indeg[n]--;

        if (indeg[n] === 0) {
          order.push(n);
          nextq.push(n);
        }
      }
    }

    q = nextq;
  }

  if (order.length !== tasks.length) throw new Error('Cycle detected!');

  return order.map((id) => taskMap.get(id));
}
