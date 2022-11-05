import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0, refresh);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);

        setProducts(data.result);
      });
  }, [page, size]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

      <div className="pagination mt-8 text-center">
        <h1 className="mb-4">current number : {page}</h1>
        <h1>size : {size}</h1>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className="btn  bg-gray-400 text-gray-900 ml-2 hover:text-white"
            key={number}
          >
            {number}
          </button>
        ))}
        <select
          className=" p-2 bg-teal-700 ml-2 text-black"
          onSubmit={() => !refresh}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option defaultValue={23} value="10">
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
