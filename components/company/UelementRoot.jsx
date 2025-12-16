"use client"
import { useRouter } from 'next/navigation';

const UelementRoot = () => {
  const router = useRouter();
  return (
    <div className="container-small py-10 xl:py-16">
      <img
        src="/icons/global/dark-logo.svg"
        alt="logo"
        className="h-[75px] md:w-[300px] 2xl:w-[450px] mb-5 md:mb-10 mx-auto"
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-[50px] 2xl:gap-[65px]">
        <div className="flex-1">
          <h4 className="fl2 !font-medium mt-5 mb-4">
            Identity and Core Focus
          </h4>
          <p className="fl3 mb-3 md:w-[100%] w-full">
            UElement Technologies was established in 2024 by a group of
            innovators and architects with a shared, unwavering commitment to
            excellence. We emerged to deliver precision and efficiency in
            solving the most complex challenges across the integrated domains of
            Cybersecurity, Cloud, and AI. As a full-stack technology partner, we
            eliminate vendor complexity by delivering an integrated, end-to-end
            service portfolio. We are strengthening the digital landscape for
            today while channelizing our ambition into pioneering the next
            generation of solutions, including the future of Quantum Computing.
          </p>
          <h4 className="fl2 !font-medium mb-4 mt-8">
            The Action-Driven Approach
          </h4>
          <p className="fl3 mb-3 md:w-[100%] w-full">
            Established in 2024 by innovators, UElement provides precision in
            solving complex challenges. We act as a full-stack partner,
            seamlessly integrating services across Cybersecurity, Cloud, and AI
            to eliminate vendor complexity. Our mission is to strengthen your
            digital today while channeling our ambition into the future of
            Quantum Computing.
          </p>
        </div>
        <div className="flex-1 bg-[#f3f3f3] p-6 rounded-[4px]">
          <img
            src="/images/company/behind-idea.jpg"
            alt="image"
            className="w-full rounded-[4px]"
          />

          <button
            className="btn-blue mx-auto md:ml-auto block mt-6"
            onClick={() => router.push('/contact-us')}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default UelementRoot;
