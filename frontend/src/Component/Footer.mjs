import React from "react";
import "../App.css";
import{Link} from "react-router-dom"

export default function Footer() {
  return (
    <>
      <footer>
        <p>
          
          <ul>
            <li><Link to="/aboutUs">About us</Link ></li>
            <li><Link to="/adminLogin">Admin Login</Link></li>

          </ul>
          Copyright My Pet Store
        </p>
      </footer>
    </>
  );
}
