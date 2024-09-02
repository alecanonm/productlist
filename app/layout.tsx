import type { Metadata } from 'next'
import { Red_Hat_Text } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from '@components/templates'

const red_hat_text = Red_Hat_Text({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products List',
  description:
    'A webpage to add products to a list and display them as a cart shopping',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={red_hat_text.className}>
        <main className='flex min-h-screen bg-Rose_100 flex-col items-center justify-between p-24'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
