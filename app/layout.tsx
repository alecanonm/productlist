import type { Metadata } from 'next'
import { Red_Hat_Text } from 'next/font/google'
import '@/styles/globals.css'

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
      <body className={red_hat_text.className}>{children}</body>
    </html>
  )
}
