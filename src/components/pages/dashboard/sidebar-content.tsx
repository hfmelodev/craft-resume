import Logo from '@/assets/logo.svg'
import { NavItems } from '@/components/pages/dashboard/nav-items'
import { UserDropdown } from '@/components/pages/dashboard/user-dropdown'
import { ModeToggle } from '@/components/shared/mode-toggle'

export function SidebarContent() {
  return (
    <>
      <div className="w-full border-muted border-b">
        <Logo className="mx-auto max-w-25" />
      </div>

      <NavItems />

      <div className="mt-auto flex w-full items-center justify-between gap-2 border-muted border-t px-3 py-4">
        <UserDropdown />
        <ModeToggle />
      </div>
    </>
  )
}
