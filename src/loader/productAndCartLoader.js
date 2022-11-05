import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
  //get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  //   console.log(products);

  //get cart
  const saveCart = getStoredCart();
  const initialCart =[]
  for (const id in saveCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = saveCart[id];
       addedProduct.quantity = quantity
       initialCart.push(addedProduct)
      
    }
  }
  return {products, initialCart}
};
