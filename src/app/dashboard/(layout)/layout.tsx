import { MobileSidebar } from '@/components/pages/dashboard/mobile-sidebar'
import { SidebarContent } from '@/components/pages/dashboard/sidebar-content'

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden lg:grid lg:grid-cols-[300px_1fr]">
      <aside className="hidden h-full w-full flex-col items-center border-muted border-r lg:flex">
        <SidebarContent />
      </aside>

      <MobileSidebar />

      <main className="flex min-h-0 w-full flex-1 flex-col overflow-auto p-4 sm:p-6 lg:h-full">{children}</main>
    </div>
  )
}
