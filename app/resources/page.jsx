import Resources from '@/components/pages/Resources'
import React from 'react'

export const metadata = {
  title: 'Resources | UElement',
  description: 'Explore our resources, case studies, and insights on the latest trends in digital transformation.',
  openGraph: {
    title: 'Resources | UElement',
    description: 'Explore our resources, case studies, and insights on the latest trends in digital transformation.',
    url: 'https://uelement.vercel.app/resources',
    siteName: 'UElement',
    images: [
      {
        url: '/images/resources/resources_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | UElement',
    description: 'Explore our resources, case studies, and insights on the latest trends in digital transformation.',
    images: ['/images/resources/resources_hero.jpg'],
  },
};

const page = () => {
  return (
    <div>
      <Resources />
    </div>
  )
}


export default page
