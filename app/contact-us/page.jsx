import Contact from '@/components/pages/Contact'
import React from 'react'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with U-Element for your digital transformation needs. We are here to help.',
  openGraph: {
    title: 'Contact Us | U-Element',
    description: 'Get in touch with U-Element for your digital transformation needs. We are here to help.',
    url: 'https://uelement.in/contact-us',
    siteName: 'U-Element',
    images: [
      {
        url: '/UElement_Profile.png',
        width: 1200,
        height: 630,
        alt: 'Contact U-Element',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | U-Element',
    description: 'Get in touch with U-Element for your digital transformation needs. We are here to help.',
    images: ['/UElement_Profile.png'],
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page
