/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function CardDelete(props) {
  

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
        
        </p>
      </div>
    </>
  );
}
