import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/NavbarV4';
import Footer from '@/components/layout/FooterV2';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://uelement.in'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://uelement.in/#organization',
              name: 'UElement',
              url: 'https://uelement.in',
              logo: 'https://uelement.in/icons/global/UElement_Logo_White 3.svg',
              description:
                'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
              sameAs: [
                'https://www.linkedin.com/company/uelement',
                'https://www.instagram.com/uelement',
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://uelement.in/#website',
              url: 'https://uelement.in',
              name: 'UElement',
              publisher: {
                '@id': 'https://uelement.in/#organization',
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'Home',
                  url: 'https://uelement.in/',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'AI & ML',
                  url: 'https://uelement.in/ai-ml',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Cloud Solutions',
                  url: 'https://uelement.in/cloud-solutions',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Cybersecurity',
                  url: 'https://uelement.in/cybersecurity',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Future Tech',
                  url: 'https://uelement.in/future-tech',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 7,
                  name: 'Our Partners',
                  url: 'https://uelement.in/our-partners',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 8,
                  name: 'Company',
                  url: 'https://uelement.in/company',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 9,
                  name: 'Contact Us',
                  url: 'https://uelement.in/contact-us',
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content (similar to <Outlet />) */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
