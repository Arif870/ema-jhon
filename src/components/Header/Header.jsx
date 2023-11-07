import React from "react";
import emalogo from "../../images/Logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="  text-neutral-content bg-neutral navbar h-2">
        <div className="mx-auto" style={{ width: "90%" }}>
          <div className="flex-1">
            <Link to={"/"}>
              <img src={emalogo} alt="" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <Link
                  to={"/order"}
                  className="hover:text-yellow-300 hover:border-b-2 border-yellow-300 "
                >
                  Order
                </Link>
              </li>
              <li>
                <a className="hover:text-yellow-300 hover:border-b-2 border-yellow-300 ">
                  Order Review
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-300 hover:border-b-2 border-yellow-300 ">
                  Manage Inventory
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-300 hover:border-b-2 border-yellow-300 ">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
