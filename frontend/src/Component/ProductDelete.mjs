import React from "react";
import CardDelete from "./CardDelete.mjs";
import { getProduct, deleteProduct } from "../Service/api.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductDelete(props) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getProduct();
    setProductData(result.data);
  };

    const handleDelete = async (id) => {
        console.log(id);
    await deleteProduct(id);
    getProductDetails();
  };

  return (
    <div >
      <div className="c">
        {productData.map((product) => (
          <div key={product._id} style={{ width: "25%" }} >
            <CardDelete
              bread={product.bread}
              color={product.color}
              imageUrl={product.imageUrl}
              Price={product.Price}
              id={product._id}
            />
            <button className="btn button btn-sm delbtn "  onClick={() => handleDelete(product._id)}>
              Delete Product
            </button>
           <Link to="/editProduct"> <button className="btn button btn-sm delbtn " onClick={() => props.editProduct(product._id)}>
              Edit Product
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
