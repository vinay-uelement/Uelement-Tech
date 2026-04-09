import IoETDigitalTwin from '@/components/solutions/IoET';
import React from 'react';

export const metadata = {
  title: 'IoET Enhanced Digital Twin | UElement Technologies',
  description:
    "UElement's IoET Digital Twin platform fuses live sensor telemetry, quantum-secured data transport, and AI-driven physics simulation to create persistent, high-fidelity virtual replicas of any physical system.",
  alternates: { canonical: 'https://uelement.in/solutions/ioet-digital-twin' },
  openGraph: {
    title: 'IoET Enhanced Digital Twin | UElement Technologies',
    description:
      'Your physical world, mirrored in real time. 10× faster scenario iteration. 99.4% physics simulation accuracy.',
    url: 'https://uelement.in/solutions/ioet-digital-twin',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/og/ioet-digital-twin.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement IoET Enhanced Digital Twin',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IoET Enhanced Digital Twin | UElement Technologies',
    description:
      'Your physical world, mirrored in real time. AI-driven physics simulation. Quantum-secured telemetry.',
    images: ['https://uelement.in/images/og/ioet-digital-twin.jpg'],
  },
};

const page = () => (
  <div>
    <IoETDigitalTwin />
  </div>
);
export default page;
