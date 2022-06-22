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
          <a href="/all" className="list-title">
            SHOES
          </a>
          <a href="/all">Lifestyle</a>
          <a href="/all">Running</a>
          <a href="/all">Soccer</a>
          <a href="/all">Basketball</a>
          <a href="/all">Baseball</a>
          <a href="/all">Golf</a>
          <a href="/all">Football</a>
        </div>
      
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/all" className="list-title">
            Clothing
          </a>
          <a href="/all">Pants</a>
          <a href="/all"> Hoodies & Sweatshirts</a>
          <a href="/all">Jackets & Vests</a>
          <a href="/all">Track Suits</a>
          <a href="/all">Short Sleeve Shirts</a>
          <a href="/all">T-Shirts</a>
          <a href="/all">Jerseys</a>
          {/* <a href="/all">Shorts</a>
          <a href="/all">Jeans</a> */}
        </div>
       
      </div>
      <div className="grid2">
        <div className="list1">
          <a href="/all" className="list-title">
            Accesorries
          </a>
          <a href="/all">Glasses</a>
          <a href="/all">Caps & Hats</a>
          <a href="/all">Watches</a>
          <a href="/all">Belts</a>
          <a href="/all">Bags</a>
          <a href="/all">Wallets & Cases</a>
          <a href="/all">Scarves</a>
          <a href="/all">Glasses</a>
        </div>
        
      </div>

      {props.genre == "w" ? (
        <div className="grid3">
          <div>
            <img src={h} alt="img"></img>
          </div>
          <div>
            <img src={z} alt="img"></img>
          </div>
          {/* <div>
            <img src={g} alt="img"></img>
          </div> */}
        </div>
      ) : (
        <div className="grid3">
          <div>
            <img src={nike2} alt="img"></img>
          </div>
          <div>
            <img src={nike1} alt="img"></img>
          </div>
          {/* <div>
            <img src={nike3} alt="img"></img>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default MainMenu;
