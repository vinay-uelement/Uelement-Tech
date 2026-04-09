import SaaSPlatform from "@/components/solutions/SaaS";

export const metadata = {
  title: 'SaaS Web Platform Management | UElement Technologies',
  description:
    "UElement's SaaS Management Platform consolidates visibility, governance, and cost control across your multi-vendor cloud software landscape — eliminating shadow IT, redundant licenses, and compliance gaps at scale.",
  alternates: { canonical: 'https://uelement.in/solutions/saas-platform' },
  openGraph: {
    title: 'SaaS Web Platform Management | UElement Technologies',
    description:
      'One platform to govern your entire software estate. 35% average SaaS cost reduction. 500+ pre-built integrations.',
    url: 'https://uelement.in/solutions/saas-platform',
    siteName: 'UElement',
    images: [
      {
        url: 'https://uelement.in/images/og/saas-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'UElement SaaS Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Web Platform Management | UElement Technologies',
    description: 'One platform to govern your entire software estate.',
    images: ['https://uelement.in/images/og/saas-platform.jpg'],
  },
};

const page = () => (
  <div>
    <SaaSPlatform />
  </div>
);
export default page;
