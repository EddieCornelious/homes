import React from "react";
import "../styles/ResponsiveNav.scss";

const ResponsiveNav = () => {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Realtors</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
