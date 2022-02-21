// import "../../styles/Home.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import {
  MdOutlineLocalShipping,
  MdSentimentSatisfiedAlt,
} from "react-icons/md";
import Header from "./Header";

export function Slider() {
  let picsSmall = [
    `url(${require("../../assets/small/man1.jpeg")})`,
    `url(${require("../../assets/small/girl3.jpg")})`,
    `url(${require("../../assets/small/girl4.jpeg")})`,
  ];
  let picsBig = [
    `url(${require("../../assets/big/girl1.jpg")})`,
    `url(${require("../../assets/big/girlo.jpg")})`,
  ];
  let i = 0;

  function leftSlide() {
    let slider:any = document.getElementsByClassName("slider")[0];
    i++;
    if (slider.offsetWidth > 1000) {
      if (i >= 2) i = 0;
      slider.style.backgroundImage = picsBig[i];
    } else {
      if (i >= 3) i = 0;

      slider.style.backgroundImage = picsSmall[i];
    }
  }
  function rightSlide() {
    let slider: any = document.getElementsByClassName("slider")[0];
    i--;
    if (slider.offsetWidth > 1000) {
      if (i < 0) i = 1;
      slider.style.backgroundImage = picsBig[i];
    } else {
      if (i < 0) i = 2;
      slider.style.backgroundImage = picsSmall[i];
    }
  }
  return (
    <div className="slider" id="slider">
      <Header color="" />
      <div className="slider-body">
        <h1>Sale of the summer collection</h1>
        <div className="shop-now">
          <div className="icon-div">
            <BsArrowRight className="icon" />
          </div>
          <a href="/">Shop now</a>
        </div>
        <div className="bottom-left">
          <div className="ad-flex">
            <div className="icon-div">
              <MdOutlineLocalShipping className="icon" />
            </div>
            <div className="text">
              <p>Free shipping</p>
              <p>On purchases over 199$</p>
            </div>
          </div>
          <div className="ad-flex">
            <div className="icon-div">
              <MdSentimentSatisfiedAlt className="icon" />
            </div>
            <div className="text">
              <p>99% satisfied customers</p>
              <p>Our clients' opinions speak for themselves</p>
            </div>
          </div>
          <div className="ad-flex">
            <div className="icon-div">
              <AiOutlineFileProtect className="icon" />
            </div>
            <div className="text">
              <p>Originality Guaranteed</p>
              <p>30 days warranty for each product from our store</p>
            </div>
          </div>
        </div>
        <div className="slider-btns">
          <BsArrowLeft className="left-slider" onClick={leftSlide} />
          <BsArrowRight className="right-slider" onClick={rightSlide} />
        </div>
      </div>
    </div>
  );
}


