import "../styles/Header.scss";
import React from "react";
import Logo from "./Logo.js";

const Nav = () => {
  return (
    <div className="_nav">
      <p>
        <a>Home</a>
      </p>
      <p>
        <a>About</a>
      </p>
      <p>
        <a>Blog</a>
      </p>
      <i>
        <Logo />
      </i>
      <p>
        <a>Realtors</a>
      </p>
      <p>
        <a>Contact</a>
      </p>{" "}
      <p>
        <a>Properties</a>
      </p>
    </div>
  );
};

export default Nav;
