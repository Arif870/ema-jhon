import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./shop.css";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = products => {
    setCart([...cart, products]);
  };

  return (
    <>
      <Header />
      <div className="shop-container grid grid-cols-4 gap-4">
        <div className="products-container col-span-3 grid grid-cols-3 gap-5">
          {products.map(product => (
            <Products
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className="cart-container">Added to cart: {cart.length}</div>
      </div>
    </>
  );
};

export default Shop;
