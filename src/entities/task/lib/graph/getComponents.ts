import type { Graph } from './buildDAGraph';

export function getComponents(graph: Graph) {
  const visited = new Set();
  const components: string[][] = [];

  const undirected: Graph = {};

  Object.keys(graph).forEach((key) => {
    undirected[key] = [];
  });

  Object.entries(graph).forEach(([node, neighbors]) => {
    neighbors.forEach((n) => {
      undirected[node].push(n);
      undirected[n].push(node);
    });
  });

  function dfs(node: string, comp: string[]) {
    if (visited.has(node)) return;

    visited.add(node);
    comp.push(node);

    for (const n of undirected[node]) {
      dfs(n, comp);
    }
  }

  Object.keys(graph).forEach((node) => {
    if (!visited.has(node)) {
      const comp: string[] = [];
      dfs(node, comp);
      components.push(comp);
    }
  });

  return components;
}
