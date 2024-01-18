import { Inter } from 'next/font/google'
import './globals.css'


//can replace the font here
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nighthawks',
  description: 'A 3-D Portfolio by Jordan Watson',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
