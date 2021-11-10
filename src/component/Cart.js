import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context";
import Singleproduct from "./Singleproduct";
import "./Style.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div className="desc">
        <h1>Total Price: {total}</h1>
        {cart.map((item) => (
          <Singleproduct prod={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Cart;
