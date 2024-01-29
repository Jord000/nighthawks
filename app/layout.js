import { crossOrigin } from '@/next.config'
import './globals.css'

export const metadata = {
  title: 'Nighthawks',
  description: 'A 3-D Portfolio by Jordan Watson',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
