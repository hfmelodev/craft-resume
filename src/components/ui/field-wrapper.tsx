import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Label } from './label'

type FieldWrapperProps = {
  label: string
  children: ReactNode
  className?: string
  error?: FieldError
}

export const FieldWrapper = ({ label, className, children, error }: FieldWrapperProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label>{label}</Label>
      {children}
      {error && <p className="text-destructive text-xs">{error.message}</p>}
    </div>
  )
}
