import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  
  return (
    <div className="products-id">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">Name : {name}</p>
        <p>Price : ${price}</p>
        <p>
          <small>Seller : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings} stars</small>
        </p>
      </div>
      <button onClick={()=>props.handleAddToCart(props.product)} className="btn-info">
        <p className="add-to-cart">Add To Cart</p>
        <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
