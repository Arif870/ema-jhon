import React from "react";
import "./product.css";

const Products = props => {
  const { img, name, price, seller, ratings } = props.product;

  return (
    <div className="product-container">
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{ height: "450px" }}
      >
        <figure>
          <img src={img} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacture: {seller}</p>
          <p>Rating: {ratings} Star</p>
          <button
            onClick={() => props.addToCart(props.product)}
            className="btn bg-orange-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
