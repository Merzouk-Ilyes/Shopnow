import { useEffect, useState } from "react";

import "../../styles/Home.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { getAllProducts } from "../../services/db_services.js";
import { Link } from "react-router-dom";

function HorizontalList() {
  function rightScroll() {
    let list = document.getElementById("list");
    if (list) list.scrollLeft += 150;
  }
  function leftScroll() {
    let list = document.getElementById("list");
    if (list) list.scrollLeft -= 150;
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    getAllProducts(setProducts);
  }, []);
  return (
    <div className="hlist">
      <div className="title">
        <p>Selected just for you</p>
        <div>
        <Link to="/all">
          <p>Show more</p>
          </Link>
        </div>
      </div>
      <div className="h-scroller">
        <BsArrowLeft
          className="left-arrow"
          id="left-arrow"
          onClick={leftScroll}
        />
        <div className="list" id="list">
          {products.map((product) => {
            return <CardList key={product.id} products={product} />;
          })}
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

function CardList({ products }) {
  return (
    <div className="cardList">
      <img src={products.data().url} alt="men" />
      <div>
        <p>{products.data().title}</p>
        <p>$ {products.data().saleprice}</p>
      </div>
    </div>
  );
}
