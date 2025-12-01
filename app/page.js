import LandingPage from '@/components/pages/LandingPage';
import Image from 'next/image'; 

export const metadata = {
  title: 'Home',
  description: 'Welcome to U-Element. We provide digital transformation solutions to help your business grow.',
  openGraph: {
    title: 'Home | U-Element',
    description: 'Welcome to U-Element. We provide digital transformation solutions to help your business grow.',
    url: 'https://uelement.in',
    siteName: 'U-Element',
    images: [
      {
        url: '/images/landing/UElement-Mudra.png',
        width: 1200,
        height: 630,
        alt: 'U-Element Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | U-Element',
    description: 'Welcome to U-Element. We provide digital transformation solutions to help your business grow.',
    images: ['/images/landing/UElement-Mudra.png'],
  },
};

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
