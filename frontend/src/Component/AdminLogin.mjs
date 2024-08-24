import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminLogin() {




  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const uhandleChange = (event) => {
    setusername(event.target.value);
  };
  const phandleChange = (event) => {
    setpassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();


    if (username ==="admin" && password === "123") {
      navigate("/ProductAdd");
    } else {
      alert("Wrong Information");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            aria-describedby="emailHelp"
            onChange={(e) => uhandleChange(e)}

          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password"
            value={password}
                      onChange={(e) => phandleChange(e)}
                      />
        </div>

        <button type="submit" className="btn  button">
          Log in
        </button>
      </form>
    </div>
  );
}
