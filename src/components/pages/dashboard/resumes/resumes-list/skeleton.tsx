import { Skeleton } from '@/components/ui/skeleton'

export function ResumesListSkeleton() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5">
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={`resume-skeleton-${index}`} className="h-75 w-full" />
      ))}
    </section>
  )
}
