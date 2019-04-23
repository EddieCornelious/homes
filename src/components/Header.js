import "../styles/Header.scss";
import React from "react";

const Header = () => {
  return (
    <ul className="nav__wrap">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#drinks">Drinks</a>
      </li>
      <li>
        <a href="#main">Meals</a>
      </li>
    </ul>
  );
};

export default Header;
