export const TableSkeleton = () => (
  <div className="h-full flex flex-col flex-1 space-y-1" data-testid="table-skeleton-id">
    <div className="h-12 bg-gray-200 rounded animate-pulse" />
    <div className="flex-1 bg-gray-200 rounded animate-pulse" />
  </div>
);
