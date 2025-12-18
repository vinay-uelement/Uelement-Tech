import Aiml from '@/components/services/Aiml';
import React from 'react';

export const metadata = {
  title: 'AI & ML | UElement Technologies',
  description: 'Explore our wide range of services in AI and Machine Learning.',
  alternates: {
    canonical: 'https://uelement.in/ai-ml',
  },
  openGraph: {
    title: 'AI & ML | UElement Technologies',
    description: 'Explore our wide range of services in AI and Machine Learning.',
    url: 'https://uelement.in/ai-ml',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/service/ai-ml/ai-ml-hero.png',
        width: 1200,
        height: 630,
        alt: 'UElement AI & ML',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & ML | UElement Technologies',
    description: 'Explore our wide range of services in AI and Machine Learning.',
    images: ['https://uelement.in/images/service/ai-ml/ai-ml-hero.png'],
  },
};

const page = () => {
  return (
    <div>
      <Aiml />
    </div>
  );
};

export default page;
