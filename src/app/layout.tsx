import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Your Name — Full Stack Developer',
  description: 'Portfolio of a Full Stack Developer specializing in modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text`}>
        {children}
      </body>
    </html>
  )
}
