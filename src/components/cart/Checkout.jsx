import React, { useState } from "react";
import Header from "../home/Header";
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import "../../styles/checkout.sass";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { BsPaypal } from "react-icons/bs";
import { SiAmericanexpress, SiBankofamerica } from "react-icons/si";
import man from "../../assets/man.jpeg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <Header color="header_white" />
      <div className="layout-checkout">
        <TopSection />
        <div className="main-section">
          <div className="info">
            <p>Shipping information</p>
            <Inputs />
          </div>
          <Payment />
          <YourCart />
        </div>
        <Bottom />
      </div>
    </>
  );
}

export default Checkout;

const Payment = () => {
  const [value, setValue] = useState("");

  return (
    <div>
    <p className="font-bold">Payment method</p>
    <div className="payment">
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio size="lg" colorScheme="orange" value="paypal">
            <BsPaypal className="logo" />
          </Radio>
          <Radio size="lg" colorScheme="orange" value="master">
            <FaCcMastercard className="logo" />
          </Radio>
          <Radio size="lg" colorScheme="orange" value="express">
            <SiAmericanexpress className="logo" />
          </Radio>
        </Stack>
        <Stack direction="row">
          <Radio size="lg" colorScheme="orange" value="bank">
            <SiBankofamerica className="logo" />
          </Radio>
          <Radio size="lg" colorScheme="orange" value="visa">
            <FaCcVisa className="logo" />
          </Radio>
          <Radio size="lg" colorScheme="orange" value="discover">
            <FaCcDiscover className="logo" />
          </Radio>
        </Stack>
      </RadioGroup>
    </div>
    </div>
  );
};

const Inputs = () => {
  return (
    <div className="inputs">
      <div>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
      </div>
      <div>
        <input type="number" placeholder="Postal code /Zip" />
        <input type="number" placeholder="Phone number" />
      </div>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="top-section">
      <p> Shipping and Payment</p>
      <div className="cart-status">
        <div className="status-icon1">
          <RiShoppingCartLine />
        </div>

        <div></div>
        <div className="status-icon2">
          <MdOutlineLocalShipping />
        </div>
      </div>
    </div>
  );
};

const YourCart = () => {
  return (
    <div className="your-cart">
      <p>Your Cart</p>
      <Tuple />
      <Tuple />
      <Tuple />
      <div className="total-cost">
        <p>Total cost</p>
        <p>$3000</p>
      </div>
    </div>
  );
};
const Tuple = () => {
  return (
    <div className="tuple">
      <div className="img">
        <img src={man} alt="" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <p>T shirt</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p>$660</p>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="bottom-section">
      <div className="back">
        <AiOutlineArrowLeft /> &nbsp; &nbsp;
        <p>Back</p>
      </div>
      <div className="links">
        <Link to="/">
          <div className="continue">CONTINUE SHOPPING</div>
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <div className="proceed">PROCEED TO PAYMENT</div>
      </div>
    </div>
  );
};
