import React from 'react';
import Link from 'next/link';

const page = () => {
  const caseStudies = [
    { id: 1, title: 'Case Study 1' },
    { id: 2, title: 'Case Study 2' },
    { id: 3, title: 'Case Study 3' },
  ];
  return (
    <div>
      <h1>Case Study Main Page</h1>
      <ul>
        {caseStudies.map((study) => (
          <li key={study.id}>
            <Link href={`/case-study/${study.id}`}>{study.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
