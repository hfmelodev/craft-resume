import { ScrollText } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { Editor } from '@/components/ui/editor'
import { SectionTitle } from '../section-title'

export function SummarySection() {
  const { control } = useFormContext()

  return (
    <div>
      <SectionTitle title="Sobre Você" icon={ScrollText} />

      <Controller
        control={control}
        name="content.summary"
        render={({ field }) => <Editor {...field} className="mt-4 max-h-75 min-h-50" />}
      />
    </div>
  )
}
