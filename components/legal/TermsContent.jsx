import { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

export default function TermsContent() {
  const [accepted, setAccepted] = useState(false);

  const termsData = [
    {
      content:
        "By accessing, browsing, or using the UElement Technologies website at uelement.in (the 'Site'), including any content, features, services, or materials provided through it, you ('User' or 'you') agree to be bound by these Terms of Use ('Terms'). These Terms constitute a legally binding agreement between you and UElement Technologies Private Limited ('UElement,' 'we,' 'us,' or 'our'), a company incorporated under the laws of India and focused on delivering next-generation cybersecurity, cloud infrastructure, and AI solutions.",
    },
    {
      content:
        'Your use of the Site implies full acceptance of these Terms, as well as our Privacy Policy, which is incorporated herein by reference. If you do not agree with any part of these Terms, you must immediately cease all use of the Site.',
    },
    {
      content:
        'We reserve the right to modify these Terms at any time by posting the updated version on the Site; continued use after such changes constitutes your acceptance of the revisions. It is your responsibility to review these Terms periodically, especially given our evolving offerings in Zero Trust architecture, quantum-resistant security, and cloud optimization services.',
    },
    {
      content:
        'All content on the Site, including text, graphics, logos, images, and software, is the exclusive property of UElement Technologies or its content suppliers. You may view and print content for personal, non-commercial use only. Reproduction, modification, distribution, or transmission of any content without written permission is strictly prohibited.',
    },
    {
      content:
        'The Site and all its original content, features, and functionality are owned by UElement Technologies, protected by copyright, trademark, and other intellectual property laws. You agree not to use any of our intellectual property without explicit written consent.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Terms Content */}
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
        {termsData.map((item, index) => (
          <div key={index} className="space-y-3">
            <p className="fl3 !text-white/70 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Acceptance Section */}
      <div className="border-t border-[#D9B24C]/20 pt-8 space-y-6">
        {/* <div className="flex items-start gap-4">
          <input
            type="checkbox"
            id="terms-accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="w-5 h-5 mt-1 cursor-pointer accent-[#D9B24C]"
          />
          <label
            htmlFor="terms-accept"
            className="text-white/70 text-14 cursor-pointer"
          >
            I have read and agree to the Terms of Use and Privacy Policy
          </label>
        </div> */}

        <div className="flex gap-4 justify-end">
          <button className="px-8 py-2 border border-white/30 text-white rounded-[4px] hover:bg-white/10 transition text-14 font-semibold">
            Decline
          </button>
          <button
            disabled={!accepted}
            className="px-8 py-2 rounded-[4px] transition text-14 font-semibold bg-white text-black hover:bg-white/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
