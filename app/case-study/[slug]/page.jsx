// app/case-study/[slug]/page.jsx
import React from 'react';
import caseStudiesData from '@/utils/CaseStudy.json';
import CaseStudyDetail from '@/components/resources/CaseStudyDetail';

const CaseStudyDetailPage = async ({ params }) => {
  const { slug } = await params;

  const caseStudy = caseStudiesData.find(
    (study) => study.id === parseInt(slug)
  );
  const otherCaseStudies = caseStudiesData.filter(
    (study) => study.id !== parseInt(slug)
  );

  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
      otherCaseStudies={otherCaseStudies}
    />
  );
};

export default CaseStudyDetailPage;
