import Company from '@/components/pages/Company';
import React from 'react';

export const metadata = {
  title: 'Company | UElement',
  description: 'Learn more about U-Element, our mission, vision, and the team driving digital innovation.',
  openGraph: {
    title: 'Company | U-Element',
    description: 'Learn more about U-Element, our mission, vision, and the team driving digital innovation.',
    url: 'https://uelement.in/company',
    siteName: 'U-Element',
    images: [
      {
        url: '/images/company/behind-idea.jpg',
        width: 1200,
        height: 630,
        alt: 'U-Element Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | U-Element',
    description: 'Learn more about U-Element, our mission, vision, and the team driving digital innovation.',
    images: ['/images/company/behind-idea.jpg'],
  },
};

const page = () => {
  return (
    <div>
      <Company />
    </div>
  );
};

export default page;
