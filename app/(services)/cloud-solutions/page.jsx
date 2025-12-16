import Cloud from '@/components/services/Cloud';
import React from 'react';

export const metadata = {
  title: 'Cloud Solutions | UElement Technologies',
  description: 'Explore our wide range of services in Cloud Solutions.',
  openGraph: {
    title: 'Cloud Solutions | UElement Technologies',
    description: 'Explore our wide range of services in Cloud Solutions.',
    url: 'https://uelement.vercel.app/cloud-solutions',
    siteName: 'UElement',
    images: [
      {
        url: '/images/service/cloud/cloudhero.png',
        width: 1200,
        height: 630,
        alt: 'UElement Cloud Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Solutions | UElement Technologies',
    description: 'Explore our wide range of services in Cloud Solutions.',
    images: ['/images/service/cloud/cloudhero.png'],
  },
};

const page = () => {
  return (
    <div>
      <Cloud />
    </div>
  );
};

export default page;
