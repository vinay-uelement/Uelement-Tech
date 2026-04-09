import QuantumSolutions from '@/components/solutions/Quantum';

export const metadata = {
  title: 'Quantum App Dev & PQC | UElement Technologies',
  description:
    "UElement's Quantum practice delivers bespoke quantum application development and Post-Quantum Cryptography migration — harnessing quantum advantage today while shielding against tomorrow's threats.",
  alternates: { canonical: 'https://uelement.in/solutions/quantum' },
  openGraph: {
    title: 'Quantum App Dev & PQC | UElement Technologies',
    description:
      'Prepare for the post-quantum era. NIST FIPS 203/204/205 compliant PQC migration & quantum app development.',
    url: 'https://uelement.in/solutions/quantum',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/og/quantum.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Quantum Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum App Dev & PQC | UElement Technologies',
    description:
      'Prepare for the post-quantum era. NIST FIPS 203/204/205 compliant.',
    images: ['https://uelement.in/images/og/quantum.jpg'],
  },
};

const page = () => (
  <div>
    <QuantumSolutions />
  </div>
);
export default page;
