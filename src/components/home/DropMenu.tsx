import React from "react";
import "../../styles/Home.css";

import nike1 from "../../assets/nike1.png";
import nike2 from "../../assets/nike2.png";
import nike3 from "../../assets/nike3.png";

import h from "../../assets/h&m.png";
import g from "../../assets/gucci.png";
import z from "../../assets/zara.png";

type mainMenuProps = {
  genre: string;
};

function MainMenu(props: mainMenuProps) {
  return (
    <div className="main-menu">
      <div className="grid1">
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
          <a href="/">Basketball</a>
          <a href="/">Baseball</a>
          <a href="/">Golf</a>
          <a href="/">Football</a>
        </div>
        {/* <div className="list2">
          <a href="/" className="list-title">
            BAGS
          </a>
          <a href="/">Backpacks</a>
          <a href="/">Messenger Bags</a>
          <a href="/">Luggage</a>
        </div> */}
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/" className="list-title">
            Clothing
          </a>
          <a href="/">Pants</a>
          <a href="/"> Hoodies & Sweatshirts</a>
          <a href="/">Jackets & Vests</a>
          <a href="/">Track Suits</a>
          <a href="/">Short Sleeve Shirts</a>
          <a href="/">T-Shirts</a>
          <a href="/">Jerseys</a>
          <a href="/">Shorts</a>
          <a href="/">Jeans</a>
        </div>
        {/* <div className="list2">
          <a href="/" className="list-title">
            Outerwear
          </a>
          <a href="/">Parkas</a>
          <a href="/">Jackets</a>
          <a href="/">Coats</a>
        </div> */}
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/" className="list-title">
            Accesorries
          </a>
          <a href="/">Glasses</a>
          <a href="/">Caps & Hats</a>
          <a href="/">Watches</a>
          <a href="/">Belts</a>
          <a href="/">Bags</a>
          <a href="/">Wallets & Cases</a>
          <a href="/">Scarves</a>
          <a href="/">Glasses</a>
        </div>
        {/* <div className="list2">
          <a href="/" className="list-title">
            Collections
          </a>
          <a href="/">Originals</a>
          <a href="/">New Casual</a>
          <a href="/">Reviving Retro</a>
        </div> */}
      </div>

      {props.genre == "w" ? (
        <div className="grid3">
          <div>
            <img src={h} alt="img"></img>
          </div>
          <div>
            <img src={z} alt="img"></img>
          </div>
          <div>
            <img src={g} alt="img"></img>
          </div>
        </div>
      ) : (
        <div className="grid3">
          <div>
            <img src={nike2} alt="img"></img>
          </div>
          <div>
            <img src={nike1} alt="img"></img>
          </div>
          <div>
            <img src={nike3} alt="img"></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainMenu;
