// app/case-study/[slug]/page.jsx
import React from 'react';
import caseStudiesData from '@/utils/CaseStudy.json';
import CaseStudyDetail from '@/components/resources/CaseStudyDetail';

export const dynamic = "force-static";
export const revalidate = 86400; // daily when ISR is available

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.id.toString(),
  }));
}

const CaseStudyDetailPage = async ({ params }) => {
  const { slug } = await params;

  const caseStudy = caseStudiesData.find(
    (study) => study.id === parseInt(slug, 10)
  );
  const otherCaseStudies = caseStudiesData.filter(
    (study) => study.id !== parseInt(slug, 10)
  );

  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
      otherCaseStudies={otherCaseStudies}
    />
  );
};

export default CaseStudyDetailPage;
