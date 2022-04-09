import React from "react";
import { Slider } from "./Content";
import {Banner} from "./Banner";
import HorizontalList from "./HorizontalList.jsx"
import WhyUs from "./WhyUs";
import Footer from "./Footer.jsx"
export  function Home() {
  return (
    <>
      <Slider />;
      <Banner />;
      <HorizontalList />;
      <WhyUs/>
      <Footer />
    </>
  );
}
