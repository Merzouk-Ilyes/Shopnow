import React from "react";
import men from "../../assets/menn.png";
import "../../styles/Home.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function HorizontalList() {
  function rightScroll() {
    let list = document.getElementById("list")
      if(list) list.scrollLeft += 150;
  }
  function leftScroll() {
    let list = document.getElementById("list")
      if(list) list.scrollLeft -= 150;
  }

  return (
    <div className="hlist">
      <div className="title">
        <p>Selected just for you</p>
        <div>
          <p>Show more</p>
        </div>
      </div>
      <div className="h-scroller">
        <BsArrowLeft
          className="left-arrow"
          id="left-arrow"
          onClick={leftScroll}
        />
        <div className="list" id="list">
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </div>
        <BsArrowRight
          className="right-arrow"
          id="right-arrow"
          onClick={rightScroll}
        />
      </div>
    </div>
  );
}

export default HorizontalList;

function CardList() {
  return (
    <div className="cardList">
      <img src={men} alt="men" />
      <div>
        <p>T-Shirt Summer Vibes</p>
        <p>119.99$</p>
      </div>
    </div>
  );
}
