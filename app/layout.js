import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/NavbarV3';
import Footer from '@/components/layout/FooterV2';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://uelement.in/#organization",
              name: "UElement",
              url: "https://uelement.in",
              logo: "https://uelement.in/icons/global/UElement_Logo_White 3.svg",
              description:
                "Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.",
              sameAs: [
                "https://www.linkedin.com/company/uelement",
                "https://www.instagram.com/uelement"
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://uelement.in/#website",
              url: "https://uelement.in",
              name: "UElement",
              publisher: {
                "@id": "https://uelement.in/#organization"
              }
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
