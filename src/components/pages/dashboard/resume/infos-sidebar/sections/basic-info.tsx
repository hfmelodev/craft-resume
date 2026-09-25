import { UserRound } from 'lucide-react'
import { InputField } from '@/components/ui/input/field'
import { SwitchField } from '@/components/ui/switch/field'
import { SectionTitle } from '../section-title'

export function BasicInfoSection() {
  return (
    <div>
      <SectionTitle title="Informações Básicas" icon={UserRound} />

      <div className="mt-4 grid w-full grid-cols-2 gap-4">
        <div className="col-span-full flex w-full items-end gap-3">
          <InputField label="Foto" placeholder="https://..." name="content.image.url" containerClassName="flex-1" />
          <SwitchField name="content.image.visible" className="mb-2" />
        </div>

        <InputField label="Nome Completo" name="content.infos.fullName" />
        <InputField label="Cabeçalho" name="content.infos.headline" />
        <InputField label="E-mail" name="content.infos.email" />
        <InputField label="Site" name="content.infos.website" />
        <InputField label="Telefone" name="content.infos.phone" />
        <InputField label="Localização" name="content.infos.location" />
      </div>
    </div>
  )
}
