import { Skeleton } from '@/components/ui/skeleton'

export function ResumesListSkeleton() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 min-[400px]:grid-cols-2">
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={`resume-skeleton-${index}`} className="h-60 w-full sm:h-75" />
      ))}
    </section>
  )
}
