import React from 'react';
import EmpoweringInnovation from '../company/EmpoweringInnovation';
import UelementRoot from '../company/UelementRoot';
import ContactUs from '../Landing/ContactUs';
import TrustedPartnerShip from '../company/TrustedPartnerShip';

const Company = () => {
  return (
    <div>
      <EmpoweringInnovation />
      <div className="bg-[#e8e8e8]">
        <UelementRoot />
        <TrustedPartnerShip />
        <ContactUs />
      </div>
    </div>
  );
};

export default Company;
