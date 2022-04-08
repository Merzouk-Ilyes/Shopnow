import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/product.sass";
import Header from "../home/Header";
import { Badge, Select } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { getDocument,addToCart } from "../../services/db_services";
import { Spinner } from "@chakra-ui/react";
import HorizontalList from "../home/HorizontalList";
import Footer from "../home/Footer.jsx"
function Product() {
  let query = useQuery();
  let id = query.get("id");
  let UID = sessionStorage.getItem("UID");
  console.log(UID)

  const [product, setProduct] = useState({});
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getDocument("products", id, setProduct);

  }, []);
  console.log(product);
  return (
    <>
      <Header color="header_white" />
      <Shipement />
      {product.length == 0 || !product ? (
        <Spinner />
      ) : (
        <div className="product">
          <div className="image">
            <div className="img">
              <img src={product.url} alt="" />
            </div>
          </div>
          <div className="data">
            <div className="badge">
              <Badge colorScheme="red">Sale</Badge>
            </div>
            <div className="title">{product.title}</div>
            {product.disprice ? (
              <div className="prices">
                <div className="saleprice">
                  {" "}
                  $ {product.saleprice * quantity}
                </div>
                <div className="disprice">${product.disprice * quantity} </div>
              </div>
            ) : (
              <p className="normal-price">{product.saleprice}$</p>
            )}

            <div className="size">
              <p>Size:</p>
              <Select
                className="select"
                bg="white"
                width={130}
                borderColor="grey"
                borderRadius="25"
                color="black"
                placeholder="Size "
                defaultValue ={size}
                onChange = { (e) => setSize(e.target.value) }
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Select>
            </div>
            <p>Quantity:</p>
            <div className="btns">
              <QBtn  quantity={quantity} setQuantity={setQuantity} />
              <div className="cart" onClick={()=> addToCart(product,quantity,product.saleprice * quantity,size,UID)}>Add to cart </div>
            </div>
          </div>
        </div>
      )}
      <HorizontalList></HorizontalList>
      <Footer />
    </>
  );
}

export default Product;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Shipement = () => {
  return (
    <div className="shipment">
      <div className="standard">
        <div className="icon">
          <MdOutlineLocalShipping />
        </div>
        <div className="text">
          <p>Standard shipment </p>
          <p>Free within 3-6 business days</p>
        </div>
      </div>
      <div className="express">
        <div className="icon">
          <FaShippingFast />
        </div>
        <div className="text">
          <p>Express delivery</p>
          <p>$35,00 available</p>
        </div>
      </div>
    </div>
  );
};

const QBtn = ({quantity,setQuantity}) => {
  
  return (
    <div className="quantity">
      <div
        className="minus"
        onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
      >
        <AiOutlineMinus />
      </div>
      <div className="q">{quantity}</div>
      <div className="plus" onClick={() => setQuantity((q) => q + 1)}>
        <AiOutlinePlus />
      </div>
    </div>
  );
};
