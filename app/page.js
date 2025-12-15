import LandingPage from '@/components/pages/LandingPage';
import Image from 'next/image'; 

export const metadata = {
  title: 'Home | UElement',
  description: 'Welcome to UElement. We provide digital transformation solutions to help your business grow.',
  openGraph: {
    title: 'Home | UElement',
    description: 'Welcome to UElement. We provide digital transformation solutions to help your business grow.',
    url: 'https://uelement.in',
    siteName: 'UElement',
    images: [
      {
        url: '/images/landing/ue92-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | UElement',
    description: 'Welcome to UElement. We provide digital transformation solutions to help your business grow.',
    images: ['/images/landing/ue92-banner.jpg'],
  },
};

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
