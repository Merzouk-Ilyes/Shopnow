import React from "react";
import { FaShippingFast } from "react-icons/fa";
import {GiReceiveMoney,GiTakeMyMoney} from 'react-icons/gi'

function WhyUs() {
  return (
    <div className="why h-[30vh] mx-36 lg:mb-40 ">
      <p className="title">Why should you choose us?</p>
      <div className="why-flex">
        <div className="section">
          <FaShippingFast className="icon" />
          <p>Free Shipping</p>
          <p>
            All purchases over $99 are eligible for free shipping via USPS First
            Class Mail.
          </p>
        </div>
        <div className="section">
          <GiReceiveMoney className="icon" />

          <p>Easy Payments</p>
          <p>
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div className="section">
          <GiTakeMyMoney className="icon" />

          <p>Money-Back Guarantee</p>
          <p>
            If an item arrived damaged or you've changed your mind, you can send
            it back for a full refund.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
