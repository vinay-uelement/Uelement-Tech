import React from 'react';
import EmpoweringInnovation from '../company/EmpoweringInnovation';
import UelementRoot from '../company/UelementRoot';
import ContactUs from '../Landing/ContactUs';
import TrustedPartnerShip from '../company/TrustedPartnerShip';

const Company = () => {
  return (
    <div>
      <div className="container-outer">
        <EmpoweringInnovation />
      </div>
        <div className="">
          <UelementRoot />
          <TrustedPartnerShip />
        </div>
    </div>
  );
};

export default Company;
