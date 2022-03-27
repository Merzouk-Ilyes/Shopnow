import React from "react";
import "../../styles/Cart.sass";
import Header from "../home/Header";
import man from "../../assets/man.jpeg";
import { AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header color="header_white" />
      <div className="layout-cart">
        <div className="top-section">
          <p> Shopping cart</p>
          <div className="cart-status">
            <div className="status-icon1">
              <RiShoppingCartLine />
            </div>

            <div></div>
            <div className="status-icon2">
              <MdOutlineLocalShipping />
            </div>
          </div>
        </div>
        <div className="main-section">
          <CartTable />
        </div>
        <CheckoutSection />
      </div>
    </>
  );
}

export default Cart;

export const CartTable = () => {
  return (
    <table>
      <tr className="table-heading">
        <td>Product</td>

        <td>Color</td>
        <td>Size</td>
        <td>Ammount</td>
        <td>Price</td>
        <td></td>
      </tr>
      <tr className="table-content">
        <td>
          <div className="image">
            <img src={man} alt="" />
          </div>
          <p>T-shite summer vibes</p>
        </td>
        <td>White</td>
        <td>XL</td>
        <td>2</td>
        <td>100$</td>
        <td>
          <AiOutlineDelete />
        </td>
      </tr>
      <tr className="table-content">
        <td>
          <div className="image">
            <img src={man} alt="" />
          </div>
          <p>T-shite summer vibes</p>
        </td>
        <td>White</td>
        <td>XL</td>
        <td>2</td>
        <td>100$</td>
        <td>
          <AiOutlineDelete />
        </td>
      </tr>
    </table>
  );
};

export const CheckoutSection = () => {
  return (
    <div className="bottom-section">
      <div className="back">
        <AiOutlineArrowLeft /> &nbsp; &nbsp;
        <p>Continue shopping</p>
      </div>
      <div className="promo">
        <input type="text" placeholder="Promo code" />
        <FaLocationArrow className="promo-icon" />
      </div>
      <div className="total">
        <p>Total: &nbsp; &nbsp;</p>
        <p>200$</p>
      </div>
      <Link to="/checkout">
        <div className="checkout">CHECKOUT</div>
      </Link>
    </div>
  );
};
