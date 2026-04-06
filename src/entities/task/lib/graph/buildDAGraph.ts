import type { TaskDTO } from '../../model/types';

export type Graph = Record<string, string[]>;

export function buildDAGraph(tasks: TaskDTO[]): Graph {
  const graph: Graph = {};

  tasks.forEach((t) => {
    graph[t.id] = [];
  });

  tasks.forEach((t) => {
    t.dependOn.forEach((dep) => {
      if (graph[dep]) {
        graph[dep].push(t.id);
      }
    });
  });

  return graph;
}
