import React, { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setcart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
