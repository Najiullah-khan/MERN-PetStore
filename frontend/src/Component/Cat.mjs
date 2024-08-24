import React from "react";
import Card from "./Card.mjs";
import { useState, useEffect } from "react";
import { getCat } from "../Service/api.js";


export default function Cat(props) {
  
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getCat();
    setProductData(result.data);
  };

  return (
    <div>
      <div className="c">
        {productData.map((product) => (
            <div key={product._id} style={{ width: '25%' }}>
            <Card
              bread={product.bread}
              color={product.color}
              imageUrl={product.imageUrl}
              Price={product.Price}
              addToCart={props.addToCart}
              id={product._id}

              />
            
          </div>
        ))}
      </div>
    </div>
  );
}
