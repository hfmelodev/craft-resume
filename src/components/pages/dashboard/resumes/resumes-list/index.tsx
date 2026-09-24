import { AddResumeButton } from '../add-resume-button'
import { NewResumeDialog } from '../new-resume-dialog'
import { ResumeCard } from '../resume-card'

export function ResumesList() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 min-[400px]:grid-cols-2">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>

      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  )
}
