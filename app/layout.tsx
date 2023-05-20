import './styles/globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next 13</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="flex  justify-center p-4 ">{children}</main>
      </body>
    </html>
  )
}
