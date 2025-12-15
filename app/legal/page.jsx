import LegalContentWrapper from '@/components/legal/LegalContentWrapper';
import { Suspense } from 'react';

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
