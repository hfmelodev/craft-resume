import { Suspense } from 'react'
import { ResumesList } from '@/components/pages/dashboard/resumes/resumes-list'
import { ResumesListSkeleton } from '@/components/pages/dashboard/resumes/resumes-list/skeleton'

export default function DashboardResumesPage() {
  return (
    <>
      <h1 className="mb-6 font-bold font-title text-3xl">Currículos</h1>

      <Suspense fallback={<ResumesListSkeleton />}>
        <ResumesList />
      </Suspense>
    </>
  )
}
