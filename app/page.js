import LandingPage from '@/components/pages/LandingPage';
import Image from 'next/image'; 

export const metadata = {
  title: 'UElement Technologies',
  description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
  openGraph: {
    title: 'UElement Technologies',
    description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
    url: 'https://uelement.in/',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/landing/ue92-banner.jpg',
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
    title: 'UElement Technologies',
    description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
    images: ['https://uelement.in/images/landing/ue92-banner.jpg'],
  },
};

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
