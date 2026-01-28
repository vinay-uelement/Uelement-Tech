import OurPartners from '@/components/pages/OurPartners'
import React, { Suspense } from 'react'

export const metadata = {
  title: 'Our Partners | UElement Technologies',
  description: 'Discover the strategic partners we collaborate with to deliver exceptional value to our clients.',
  alternates: {
    canonical: 'https://uelement.in/our-partners',
  },
  openGraph: {
    title: 'Our Partners | UElement Technologies',
    description: 'Discover the strategic partners we collaborate with to deliver exceptional value to our clients.',
    url: 'https://uelement.in/our-partners',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/landing/si-partnership.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners | UElement Technologies',
    description: 'Discover the strategic partners we collaborate with to deliver exceptional value to our clients.',
    images: ['https://uelement.in/images/landing/si-partnership.jpg'],
  },
};

const page = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <OurPartners />
      </Suspense>
    </div>
  )
}

export default page
