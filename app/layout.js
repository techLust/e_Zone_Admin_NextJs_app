import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './_components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eZoneAdmin',
  description: 'Application for eZone admin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  )
}
