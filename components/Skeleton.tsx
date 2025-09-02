export function CardSkeleton() {
  return (
    <div className="card animate-pulse p-4">
      <div className="h-40 w-full rounded-xl bg-gray-200" />
      <div className="mt-3 h-4 w-2/3 rounded bg-gray-200" />
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
    </div>
  );
}
