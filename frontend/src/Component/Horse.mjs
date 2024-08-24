import React from "react";
import Card from "./Card.mjs";
import { getHorse } from "../Service/api.js";
import { useState, useEffect } from "react";
export default function Horse(props) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getHorse();
    setProductData(result.data);
  };
  return (
    <div>
      <div className="c">
        {productData.map((product) => (
            <div  key={product._id} style={{ width: '25%' }}>
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
