import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dog">Dogs</Link>
          </li>
          <li>
            <Link to="/cat">Cats</Link>
          </li>
          <li>
            <Link to="/birds">Birds</Link>
          </li>
          <li>
            <Link to="/horse">Horse</Link>
          </li>
          <li >
            <Link to="/cart">Cart</Link>
          </li>
          <li >
            <Link to="/fish">Fish</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
