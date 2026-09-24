'use client'

import { FilePlus, Plus } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { DialogClose, DialogFooter } from '@/components/ui/dialog/primitive'
import { InputField } from '@/components/ui/input/field'

type FormData = {
  title: string
}

export function NewResumeDialog(props: BaseDialogProps) {
  const methods = useForm<FormData>({
    shouldUnregister: true,
    defaultValues: { title: '' },
  })

  // const router = useRouter();

  // const { mutate: handleCreateResume, isPending } = useMutation({
  //   mutationFn: createResume,
  //   onSuccess: (resume) => {
  //     toast.success("Currículo criado com sucesso!");
  //     router.push(`/dashboard/resumes/${resume.id}`);
  //   }
  // })

  const onSubmit = async (data: FormData) => {
    // handleCreateResume(data.title);
    console.log(data)
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      icon={<FilePlus />}
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col gap-5 pt-1" onSubmit={methods.handleSubmit(onSubmit)}>
            <InputField
              label="Título"
              name="title"
              placeholder="Ex: Desenvolvedor Front-end"
              className="h-9 px-3"
              autoFocus
              required
            />

            <DialogFooter className="-mx-4 -mb-4 rounded-b-xl border-t bg-muted/30 px-4 py-3">
              <DialogClose asChild>
                <Button type="button" variant="outline" size="lg">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" size="lg" disabled={methods.formState.isSubmitting}>
                <Plus data-icon="inline-start" />
                Criar currículo
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      }
    />
  )
}
