// import "../../styles/Home.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import {
  MdOutlineLocalShipping,
  MdSentimentSatisfiedAlt,
} from "react-icons/md";
import Header from "./Header";
import { Link } from "react-router-dom";
import { leftSlide, rightSlide } from "../../services/helpers";

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
  return (
    <div className="slider" id="slider">
      <Header color="" />
      <div className="slider-body">
        <h1>Sale of the summer collection</h1>
        <Link to="all">
          <div className="shop-now">
            <div className="icon-div">
              <BsArrowRight className="icon" />
            </div>
            <div className="text-white font-semibold" >Shop now</div>
          </div>
        </Link>

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
          <BsArrowLeft
            className="left-slider"
            onClick={() => leftSlide(document, picsBig, picsSmall)}
          />
          <BsArrowRight
            className="right-slider"
            onClick={() => rightSlide(document, picsBig, picsSmall)}
          />
        </div>
      </div>
    </div>
  );
}
