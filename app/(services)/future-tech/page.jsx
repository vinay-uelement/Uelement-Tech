import FutureTech from '@/components/services/FutureTech';
import React from 'react';

export const metadata = {
  title: 'Future Tech | UElement Technologies',
  description: 'Explore our wide range of services in Future Tech.',
  openGraph: {
    title: 'Future Tech | UElement Technologies',
    description: 'Explore our wide range of services in Future Tech.',
    url: 'https://uelement.vercel.app/future-tech',
    siteName: 'UElement',
    images: [
      {
        url: '/images/service/future-tech/futureTechHero.png',
        width: 1200,
        height: 630,
        alt: 'UElement Future Tech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Tech | UElement Technologies',
    description: 'Explore our wide range of services in Future Tech.',
    images: ['/images/service/future-tech/futureTechHero.png'],
  },
};


const page = () => {
  return (
    <div>
      <FutureTech />
    </div>
  );
};

export default page;
