import OurPartners from '@/components/pages/OurPartners'
import React from 'react'


export const metadata = {
  title: 'Our Partners | UElement Technologies',
  description: 'Discover the strategic partners we collaborate with to deliver exceptional value to our clients.',
  openGraph: {
    title: 'Our Partners | UElement Technologies',
    description: 'Discover the strategic partners we collaborate with to deliver exceptional value to our clients.',
    url: 'https://uelement.in/our-partners',
    siteName: 'UElement',
    images: [
      {
        url: '/images/landing/si-partnership.jpg',
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
    images: ['/images/landing/si-partnership.jpg'],
  },
};

const page = () => {
  return (
    <div>
      <OurPartners />
    </div>
  )
}

export default page
