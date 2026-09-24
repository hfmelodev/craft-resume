'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/assets/logo.svg'
import { SidebarContent } from '@/components/pages/dashboard/sidebar-content'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)

  // Fecha o menu ao navegar para outra rota
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  return (
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-muted border-b px-4 lg:hidden">
      <Logo className="h-10 w-auto" />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-75 gap-0 p-0">
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </header>
  )
}
