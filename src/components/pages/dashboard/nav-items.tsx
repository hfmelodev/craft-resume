'use client'

import { Newspaper, SquareUser } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const NavItems = () => {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Currículos',
      icon: Newspaper,
      path: '/dashboard/resumes',
    },
    {
      label: 'Configurações de Conta',
      icon: SquareUser,
      path: '/dashboard/account',
    },
  ]

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map(item => {
        const isActive = pathname.startsWith(item.path)

        return (
          <Link key={item.path} href={item.path}>
            <Button variant="ghost" className={cn('w-full justify-start gap-2', isActive && 'bg-accent')}>
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
