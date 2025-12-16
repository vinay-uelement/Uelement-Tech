import Services from '@/components/pages/Services'
import React from 'react'


export const metadata = {
  title: 'Services | UElement',
  description: 'Explore our wide range of services including web development, consulting, and digital strategy.',
  openGraph: {
    title: 'Services | UElement',
    description: 'Explore our wide range of services including web development, consulting, and digital strategy.',
    url: 'https://uelement.in/services',
    siteName: 'UElement',
    images: [
      {
        url: '/images/service/service-one.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | UElement',
    description: 'Explore our wide range of services including web development, consulting, and digital strategy.',
    images: ['/images/service/service-one.jpg'],
  },
};

const page = () => {
  return (
    <div>
      <Services />
    </div>
  )
}


export default page
