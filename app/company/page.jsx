import Company from '@/components/pages/Company';
import React from 'react';

export const metadata = {
  title: 'Company | UElement Technologies',
  description: 'Learn more about UElement, our mission, vision, and the team driving digital innovation.',
  openGraph: {
    title: 'Company | UElement Technologies',
    description: 'Learn more about UElement, our mission, vision, and the team driving digital innovation.',
    url: 'https://uelement.vercel.app/company',
    siteName: 'UElement',
    images: [
      {
        url: '/images/company/behind-idea.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | UElement Technologies',
    description: 'Learn more about UElement, our mission, vision, and the team driving digital innovation.',
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
