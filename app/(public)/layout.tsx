import '@/styles/globals.css'
import { Josefin_Sans, Oswald } from '@next/font/google';
import Navbar from '@/components/Navbar';
import { client } from '@/lib/sanity.client';
import { siteSettings } from '@/lib/queries';
import Footer from '@/components/Footer';

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

export default async function RootLayout({children,}: {children: React.ReactNode}) {
  const data = await client.fetch(siteSettings);
  const navigation = data[0].navigation;
  // console.log(data)
  
  return (
    <html lang="en" className={`${josefinSans.variable} ${oswald.variable} overflow-x-hidden`}>
      <body>
        <Navbar navigation={navigation} image={data[0].logo} />
        {children}
        <Footer navigation={navigation} image={data[0].logo} />
      </body>
    </html>
  )
}
