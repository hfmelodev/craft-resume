import Logo from '@/assets/logo.svg'
import { NavItems } from '@/components/pages/dashboard/nav-items'
import { UserDropdown } from '@/components/pages/dashboard/user-dropdown'
import { ModeToggle } from '@/components/shared/mode-toggle'

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-muted border-r">
        <div className="w-full border-muted border-b">
          <Logo className="mx-auto max-w-25" />
        </div>

        <NavItems />

        <div className="mt-auto flex w-full items-center justify-between gap-2 border-muted border-t px-3 py-4">
          <UserDropdown />
          <ModeToggle />
        </div>
      </aside>

      <main className="flex h-full w-full flex-col overflow-auto p-6">{children}</main>
    </div>
  )
}
