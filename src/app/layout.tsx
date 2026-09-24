import '@/styles/globals.css'

import { Roboto, Roboto_Slab } from 'next/font/google'
import { cn } from '@/lib/utils'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-heading' })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={cn('h-full font-sans antialiased', roboto.variable, robotoSlab.variable)}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
