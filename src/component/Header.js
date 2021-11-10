import React, { useContext } from "react";

import "./Style.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";
const Header = () => {
  const { cart } = useContext(CartContext);
  console.log(useContext(CartContext));
  return (
    <div className="Head">
      <span className="header">Context Api Tutorial</span>
      <ul className="nav">
        <li>
          <Link className="item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="item" to="/Cart">
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
