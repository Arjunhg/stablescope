export const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

export const CardSkeleton = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-6 w-6" />
    </div>
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
)

export const MetricSkeleton = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-4 w-24" />
    </div>
    <Skeleton className="h-4 w-16" />
  </div>
) 