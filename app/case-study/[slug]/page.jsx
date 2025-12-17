import React from 'react';

const page = async ({ params }) => {
  const { slug } = await params;
  console.log('Slug:', slug);

  return (
    <div>
      <p>Current case study: {slug}</p>
    </div>
  );
};

export default page;
