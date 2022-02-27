import React from "react";
import { Slider } from "./Slider";
import {Banner} from "./Banner";
import HorizontalList from "./HorizontalList"
import WhyUs from "./WhyUs";
import { ToastContainer } from "react-toastify";

export  function Home() {
  
  return (
    <div>
       
      <Slider />;
      <Banner />;
      <HorizontalList />;
      <WhyUs/>


    </div>
  );
}
