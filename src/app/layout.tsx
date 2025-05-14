// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Larza Reviews',
  description: 'Leave feedback for Larza',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        {/* Blurred Background */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center blur-lg brightness-50"
          style={{ backgroundImage: 'url(/larza.jpg)' }}
        ></div>

        {/* Semi-transparent black overlay for readability */}
        <div className="fixed inset-0 z-0 bg-black/60"></div>

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
