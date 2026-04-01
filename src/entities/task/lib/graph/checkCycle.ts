export function checkCycle(graph: Record<string, string[]>) {
  const visited = new Set<string>();
  const stack = new Set<string>();

  const dfs = (node: string): boolean => {
    if (stack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    stack.add(node);

    for (const neighbor of graph[node] ?? []) {
      if (dfs(neighbor)) return true;
    }

    stack.delete(node);
    return false;
  };

  return Object.keys(graph).some(dfs);
}
