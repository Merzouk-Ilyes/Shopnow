import React from "react";
import { Slider } from "./Content";
import {Banner} from "./Banner";
import HorizontalList from "./HorizontalList"
import WhyUs from "./WhyUs";
import { ToastContainer } from "react-toastify";

export  function Home() {
  return (
    <>
      <Slider />;
      <Banner />;
      <HorizontalList />;
      <WhyUs/>
    </>
  );
}
