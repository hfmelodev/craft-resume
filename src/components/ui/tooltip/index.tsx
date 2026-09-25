import type { ComponentProps, ReactNode } from 'react'
import { TooltipContent, TooltipProvider, Tooltip as TooltipRoot, TooltipTrigger } from './primitive'

type TooltipProps = {
  children: ReactNode
  content: string | number | ReactNode
  side?: ComponentProps<typeof TooltipContent>['side']
}

export const Tooltip = ({ children, content, side }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
