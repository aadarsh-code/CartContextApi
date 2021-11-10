import React, { useState } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
const App = () => {
  const [cart, setcart] = useState([]);

  return (
    <Router>
      <Header cart={cart} />

      <div>
        <Routes>
          <Route path="/" element={<Home cart={cart} setcart={setcart} />} />

          <Route
            path="/Cart"
            element={<Cart cart={cart} setcart={setcart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
