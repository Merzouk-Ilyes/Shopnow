import React from "react";
import "../../styles/Home.css";

import nike1 from "../../assets/nike1.png";
import nike2 from "../../assets/nike2.png";
import nike3 from "../../assets/nike3.png";

type mainMenuProps = {
  genre: string;
};

function MainMenu(props: mainMenuProps) {
  return (
    <div className="main-menu">
      <div className="grid1">
        {props.genre}
        <a href="/">Sale</a>
        <a href="/">Bestsellers</a>
        <a href="/">Latest Arrivals</a>
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/" className="list-title">
            SHOES
          </a>
          <a href="/">Lifestyle</a>
          <a href="/">Running</a>
          <a href="/">Soccer</a>
        </div>
        <div className="list2">
          <a href="/" className="list-title">
            BAGS
          </a>
          <a href="/">Backpacks</a>
          <a href="/">Messenger Bags</a>
          <a href="/">Luggage</a>
        </div>
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/" className="list-title">
            Clothing
          </a>
          <a href="/">Pants</a>
          <a href="/"> Hoodies & Sweatshirts</a>
          <a href="/">Vests</a>
        </div>
        <div className="list2">
          <a href="/" className="list-title">
            Outerwear
          </a>
          <a href="/">Parkas</a>
          <a href="/">Jackets</a>
          <a href="/">Coats</a>
        </div>
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/" className="list-title">
            Accesorries
          </a>
          <a href="/">Glasses</a>
          <a href="/">Caps & Hats</a>
          <a href="/">Watches</a>
        </div>
        <div className="list2">
          <a href="/" className="list-title">
            Collections
          </a>
          <a href="/">Originals</a>
          <a href="/">New Casual</a>
          <a href="/">Reviving Retro</a>
        </div>
      </div>
      <div className="grid3">
        <img src={nike1} alt="img"></img>
        <img src={nike2} alt="img"></img>
        <img src={nike3} alt="img"></img>
      </div>
    </div>
  );
}

export default MainMenu;
