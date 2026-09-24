'use client'

import { LogOut, SquareUser } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="min-w-0 flex-1 justify-start gap-2 px-2">
          <Avatar className="h-6 w-6 shrink-0">
            <AvatarImage src="https://github.com/meta.png" alt="@shadcn" />
            <AvatarFallback>HM</AvatarFallback>
          </Avatar>
          <span className="truncate font-medium">Hilquias Ferreira Melo</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-(--radix-dropdown-menu-trigger-width)">
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações de Conta
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="gap-2 text-red-500">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
