import { useEffect, useState } from "react";
import "../../styles/Cart.sass";
import Header from "../home/Header";
import man from "../../assets/man.jpeg";
import { AiOutlineDelete, AiOutlineArrowLeft } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import { getCart } from "../../services/db_services";
import {Spinner} from "@chakra-ui/react";
import {dltDoc} from "../../services/db_services"
function Cart() {
  let UID = sessionStorage.getItem("UID");
  const [total , setTotal] = useState(0)
  const [products, setProducts] = useState([]);
  let t = 0;
  useEffect(() => {
    setProducts([]);
    getCart(setProducts,UID);
    products.forEach((product) => {
      t =  t + product.data().price 
      console.log(product.data().price)

    })
    setTotal(t)
  }, []);

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
          <CartTable products={products} UID={UID} />
        </div>
        <CheckoutSection products={products} />
      </div>
    </>
  );
}

export default Cart;

export const CartTable = ({products , UID}) => {
  
  return (
    <table>
      <tr className="table-heading">
        <td>Product</td>
        <td>Size</td>
        <td>Ammount</td>
        <td>Price</td>
        <td></td>
      </tr>
      {products.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        products.map((product) => {
          return (
            <tr className="table-content" key={product.id} >
              <td>
                <div className="image">
                  <img src={product.data().url} alt="" />
                </div>
                <p>{product.data().title}</p>
              </td>
              <td>{product.data().size}</td>
              <td>{product.data().quantity}</td>
              <td>$ {product.data().price}</td>
              <td>
                <AiOutlineDelete  onClick={()=> dltDoc(UID,product.id ,window)}  />
              </td>
            </tr>
          );
        })
      )}
    </table>
  );
};

export const CheckoutSection = ({products}) => {
  const [total , setTotal] = useState(0)
  let t = 0;
  useEffect(() => {
    products.forEach((product) => {
      t =  t + product.data().price 
      console.log(product.data().price)
    })
    
    setTotal(t)
  }, []);
  
  return (
    <div className="bottom-section">
      <Link to="/">
        <div className="back">
          <AiOutlineArrowLeft /> &nbsp; &nbsp;
          <p>Continue shopping</p>
        </div>
      </Link>
      <div className="promo">
        <input type="text" placeholder="Promo code" />
        <FaLocationArrow className="promo-icon" />
      </div>
      <div className="total">
        <p>Total: &nbsp; &nbsp;</p>
        <p>${total}</p>
      </div>
      <Link to="/checkout">
        <div className="checkout">CHECKOUT</div>
      </Link>
    </div>
  );
};
