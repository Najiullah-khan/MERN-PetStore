import React, { useState, useEffect } from "react";
import { getProductById, editProduct } from "../Service/api.js";
import { useNavigate } from "react-router-dom";

const ProductEdit = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductDetails = async () => {
    const result = await getProductById(props.id);
    setProduct(result.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editedProduct = {
      bread: event.target.bread.value,
      color: event.target.color.value,
      imageUrl: event.target.imageUrl.value,
      Price: event.target.price.value,
      category: event.target.category.value,
    };
    await editProduct(props.id, editedProduct);
    event.target.bread.value = "";
    event.target.color.value = "";
    event.target.imageUrl.value = "";
    event.target.price.value = "";
    event.target.category.value = "";
    alert("Product Edit");
    navigate("/ProductDelete");
  };

  return (
    <div className="card-edit">
      <center>
        
        <h2>Edit Product</h2>
      </center>
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="bread">Bread</label>
          <input
            type="text"
            className="form-control"
            id="bread"
            defaultValue={product.bread}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            defaultValue={product.color}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            defaultValue={product.imageUrl}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>

          <select
            className="form-control"
            name="category"
            id="category"
            defaultValue={product.category}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="horse">Horse</option>
            <option value="birds">Birds</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            defaultValue={product.Price}
            required
          />
        </div>

        <button type="submit" className="btn  button ">
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
