import CyberSecurity from '@/components/services/CyberSecurity';
import React from 'react';

export const metadata = {
  title: 'Cyber Security | UElement Technologies',
  description: 'Explore our wide range of services in Cyber Security.',
  openGraph: {
    title: 'Cyber Security | UElement Technologies',
    description: 'Explore our wide range of services in Cyber Security.',
    url: 'https://uelement.in/cybersecurity',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/service/cybersecurity/cybersecurityHero.png',
        width: 1200,
        height: 630,
        alt: 'UElement Cyber Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Security | UElement Technologies',
    description: 'Explore our wide range of services in Cyber Security.',
    images: ['https://uelement.in/images/service/cybersecurity/cybersecurityHero.png'],
  },
};


const page = () => {
  return (
    <div>
      <CyberSecurity />
    </div>
  );
};

export default page;
