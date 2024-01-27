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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"   />
    
        <link
          href="https://fonts.googleapis.com/css2?family=Solway:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
