import React, { useState } from "react";
import "./Style.css";
import faker from "faker";
import Singleproduct from "./Singleproduct";
faker.seed(100);
const Home = () => {
  const productArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
    };
  });
  const [product] = useState(productArray);

  return (
    <div className="allpro">
      {product.map((prod) => {
        return <Singleproduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;
