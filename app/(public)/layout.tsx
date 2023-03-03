import '@/styles/globals.css'
import { Josefin_Sans, Oswald } from '@next/font/google';
import Navbar from '@/components/Navbar';
import { client } from '@/lib/sanity.client';
import { siteSettings } from '@/lib/queries';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import urlFor from '@/lib/urlFor';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-jsoefin-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap'
});

export async function generateMetadata() {
  const data = await client.fetch(siteSettings);
  const settings = data[0];
  const seo = settings.seo;
  return {
    title: seo.title,
    description: seo.desc,
    openGraph: {
      siteName: settings.title,
      title: seo.title,
      description: seo.desc,
      images: [
        {
          url: `${urlFor(seo.image).url()}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
    robots: {
      index: settings.indexSite,
      follow: settings.indexSite,
      nocache: false,
      googleBot: {
        index: settings.indexSite,
        follow: settings.indexSite,
        noimageindex: !settings.indexSite,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

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
