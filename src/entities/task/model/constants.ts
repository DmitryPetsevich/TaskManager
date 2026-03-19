export const TASK_STATUSES = ['In Progress', 'Paused', 'Done'] as const;
export const TASK_PRIORITIES = ['Low', 'Medium', 'High'] as const;

export const statusOptions = TASK_STATUSES.map((s) => ({ label: s, value: s }));
export const priorityOptions = TASK_PRIORITIES.map((p) => ({ label: p, value: p }));
