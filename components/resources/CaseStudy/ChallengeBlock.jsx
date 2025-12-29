function ChallengeBlock({ caseStudy }) {
  return (
    <div className="bg-[#F2F2F2] p-6 md:p-8">
      <h2 className="fl2 mb-4">Challenge</h2>
      <p className="fl3 leading-[1.8]">
        {caseStudy.challenge}
      </p>
    </div>
  );
}


export default ChallengeBlock;