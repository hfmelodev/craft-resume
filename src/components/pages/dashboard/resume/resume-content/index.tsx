'use client'

// import { useFormContext } from 'react-hook-form'
// import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

// import { TransformControls } from './controls'
// import { NavigationHeader } from './header'
// import { ResumeTemplate } from './templates'

// type ResumeContentProps = {
//   title: string
// }

export const ResumeContent = () => {
  // const { watch } = useFormContext<ResumeData>()

  // const data = watch()

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted dark:bg-background">
      {/* <TransformWrapper initialScale={0.5} minScale={0.4} centerOnInit centerZoomedOut limitToBounds={false}>
        <>
          <NavigationHeader title={title} />
          <TransformControls title={title} />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper> */}
    </section>
  )
}
