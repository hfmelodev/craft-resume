import type { ReactNode } from 'react'
import { DialogContent, DialogDescription, DialogHeader, Dialog as DialogRoot, DialogTitle, DialogTrigger } from './primitive'

export type BaseDialogProps = {
  children?: ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

type DialogProps = BaseDialogProps & {
  title: string
  description?: string
  icon?: ReactNode
  content: ReactNode
}

export function Dialog({ children, title, description, icon, content, open, setOpen }: DialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader className={icon ? 'flex-row items-center gap-3' : undefined}>
          {icon && (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 [&_svg]:size-5">
              {icon}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
        </DialogHeader>

        {content}
      </DialogContent>
    </DialogRoot>
  )
}
