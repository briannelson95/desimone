import '../styles/globals.css'
import { Josefin_Sans, Oswald } from '@next/font/google';
import Script from 'next/script';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-jsoefin-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${oswald.variable}`}>
      <head>
        <Script src="https://www.youtube.com/iframe_api"></Script>
      </head>

      <body>{children}</body>
    </html>
  )
}
