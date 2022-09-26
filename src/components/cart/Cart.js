import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let shippingCharge = 0;
  for (const product of cart) {
    total = total + product.price;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shippingCharge + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {props.cart.length}</p>
      <p>Total Price : $ {total} </p>
      <p>Total Shipping Charge : $ {shippingCharge}</p>
      <p>Tax : $ {tax.toFixed(2)}</p>
      <h3>Grand Total : $ {grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
