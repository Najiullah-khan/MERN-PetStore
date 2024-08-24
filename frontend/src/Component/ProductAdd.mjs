import React from "react";
import { useState } from "react";
import { addProduct } from "../Service/api.js";
import { Link } from "react-router-dom";

export default function ProductAdd() {
  const [productData, setproductData] = useState({
    bread: "",
    color: "",
    price: "",
    imageUrl: "",
    category: "dog",
  });
  const { bread, color, price, imageUrl } = productData;
  const handleChange = (e) => {
    setproductData({ ...productData, [e.target.name]: [e.target.value] });
  };
  const addDetails = async (e) => {
    e.preventDefault();
    if (productData.bread !== "" && productData.color !== "" && productData.price !== "" && productData.imageUrl !== "") {
      await addProduct(productData);
      setproductData(
        {
          bread: "",
          color: "",
          price: "",
          imageUrl: "",
          category: "",
      }
    )
    } else {
      Window.alert("Please fill all feild");
    }
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="bread" className="form-label">
            Bread
          </label>
          <input
            type="text"
            className="form-control"
            value={bread}
            name="bread"
            id="bread"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            type="text"
            value={color}
            name="color"
            className="form-control"
            id="color"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="text"
            value={price}
            name="price"
            className="form-control"
            id="price"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            defaultValue="dog"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="horse">Horse</option>
            <option value="birds">Birds</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="imgurl" className="form-label">
            image url
          </label>
          <input
            type="text"
            value={imageUrl}
            name="imageUrl"
            className="form-control"
            id="imgurl"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          className="btn  button "
          onClick={(e) => addDetails(e)}
        >
          Add
        </button>
        <Link to="/ProductDelete">
          <button type="submit" className="btn  button btna">
            View/Delete Product
          </button>
        </Link>
      </form>
    </div>
  );
}
