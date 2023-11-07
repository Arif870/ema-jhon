import React from "react";
import herobanner from "../../images/hero banner.jpg";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="hero-section grid md:grid-cols-3 grid-cols-2">
        <div className="hero-text col-span-2">
          <p className="sale mb-10">Sale up to 70% off</p>
          <h1 className="text-5xl font-bold">New Collection For Fall</h1>
          <p className="text-xl mt-3">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <button
            style={{ backgroundColor: "#FF9900" }}
            className="py-2 px-4 rounded-md font-bold mt-10"
          >
            SHOP NOW
          </button>
        </div>
        <div className="hero-banner mt-10 md:mt-0">
          <img src={herobanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
