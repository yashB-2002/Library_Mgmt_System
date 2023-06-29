import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
const Navbar = () => {
  const { bookdispatch } = useContext(Cart);
  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/">
          <h2>
            <span>B</span>ook
            <span>C</span>onnect
          </h2>
        </Link>
      </div>

      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="input-search">
        <input
          className="ip"
          type="text"
          onChange={(e) => {
            bookdispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
          placeholder="Search your favourite book here....."
        />
      </div>
    </nav>
  );
};

export default Navbar;
