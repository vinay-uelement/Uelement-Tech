import Observability from '@/components/solutions/Observability';

export const metadata = {
  title: 'Observability Suite | UElement Technologies',
  description:
    "UElement's Observability Suite unifies SecOps, CloudOps, AIOps, and FinOps into a single intelligence platform — transforming reactive incident management into proactive operational excellence.",
  alternates: { canonical: 'https://uelement.in/solutions/observability' },
  openGraph: {
    title: 'Observability Suite | UElement Technologies',
    description:
      'See everything. Act with intelligence. 92% MTTD reduction. <60s threat detection. 4-in-1 ops domains unified.',
    url: 'https://uelement.in/solutions/observability',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/og/observability.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement Observability Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Observability Suite | UElement Technologies',
    description:
      'See everything. Act with intelligence. SecOps · CloudOps · AIOps · FinOps unified.',
    images: ['https://uelement.in/images/og/observability.jpg'],
  },
};

const page = () => (
  <div>
    <Observability />
  </div>
);
export default page;
