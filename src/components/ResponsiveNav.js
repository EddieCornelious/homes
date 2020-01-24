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
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Realtors</li>
            </a>
            <a href="#" target="_blank">
              <li>Contact</li>
            </a>
            <a href="#" target="_blank">
              <li>Properties</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
