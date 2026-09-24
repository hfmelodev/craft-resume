import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ResumeCardButtonProps = {
  title: string
  description: string
  icon?: ReactNode
}

export function ResumeCardButton({ title, description, icon }: ResumeCardButtonProps) {
  return (
    // biome-ignore lint/a11y/useButtonType: <false>
    <button
      className={cn(
        'h-60 w-full rounded border border-muted-foreground/20 bg-muted/50 sm:h-75',
        'relative flex items-center justify-center overflow-hidden outline-none',
        'transition-all hover:brightness-105 dark:hover:brightness-125'
      )}
    >
      {icon}

      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-background/80 p-3 text-left">
        <p className="font-semibold font-title text-sm">{title}</p>
        <span className="block text-muted-foreground text-xs">{description}</span>
      </div>
    </button>
  )
}

export function ResumeCard() {
  const formattedLastUpdate = formatDistanceToNow(new Date().setDate(new Date().getDate() - 1), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Link href={`/dashboard/resumes/1`} className="block w-full">
      <ResumeCardButton title="Currículo 1" description={`Última atualização ${formattedLastUpdate}`} />
    </Link>
  )
}
