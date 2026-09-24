import '@/styles/globals.css'

import { Roboto, Roboto_Slab } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { cn } from '@/lib/utils'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'Craft Resume',
  description: 'Craft Resume - Crie seu currículo de forma rápida e fácil',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', roboto.variable, robotoSlab.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
