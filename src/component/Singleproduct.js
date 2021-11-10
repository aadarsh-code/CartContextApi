import React, { useContext } from "react";
import { CartContext } from "../Context";
import "./Style.css";
const Singleproduct = ({ prod }) => {
  const { cart, setcart } = useContext(CartContext);
  console.log(useContext(CartContext));
  return (
    <div className="box">
      <img className="img" src={prod.image} alt={prod.name} />
      <div className="desc">
        <span className="name" style={{ fontWeight: 400 }}>
          {prod.name}
        </span>
        <span className="price" style={{ margin: 20 }}>
          Price:{prod.price.substring(0, 3)}rs
        </span>
      </div>
      {cart.includes(prod) ? (
        <button onClick={() => setcart(cart.filter((p) => p.id !== prod.id))}>
          Remove to Cart
        </button>
      ) : (
        <button onClick={() => setcart([...cart, prod])}>Add to Cart</button>
      )}
    </div>
  );
};
export default Singleproduct;
