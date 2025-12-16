import LegalContentWrapper from '@/components/legal/LegalContentWrapper';
import { Suspense } from 'react';

export const metadata = {
  title: 'Legal | UElement Technologies',
  description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
  alternates: {
    canonical: '/legal',
  },
  openGraph: {
    title: 'Legal | UElement Technologies',
    description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
    url: 'https://uelement.in/legal',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/landing/ue92-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Legal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal | UElement Technologies',
    description: 'Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud and AI.',
    images: ['https://uelement.in/images/landing/ue92-banner.jpg'],
  },
};


export default function LegalPage() {
  return (
    <section className="min-h-screen bg-primary-blue">
      <div className="container-small section-block-padding">
        <Suspense fallback={<div>Loading...</div>}>
          <LegalContentWrapper />
        </Suspense>
      </div>
    </section>
  );
}
