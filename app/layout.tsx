import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Developer',
  description: 'Portfolio ca nhan - Software Developer chuyen ve phat trien web va ung dung.',
  // generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ok.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ok.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ok.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ok.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
