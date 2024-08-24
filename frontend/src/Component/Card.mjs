/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Card(props) {
  

  return (
    <>
      
      <div className="card">
        <div className="img">
          <img src={props.imageUrl} alt="Card image" />
        </div>
        <p>
          <ul className="item">
            <li className="title">{}</li>

            <li>Bread: {props.bread}</li>
            <li>color: {props.color}</li>
            <li>Price: {props.Price}</li>

          </ul>
          <button className="btn button btn-sm " onClick={() => props.addToCart({
            bread: props.bread, price: props.Price, color: props.color, imageUrl: props.imageUrl,id:props._id
          })}>
            Add to cart
          </button>
        </p>
      </div>
    </>
  );
}
