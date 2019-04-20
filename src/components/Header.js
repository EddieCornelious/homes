import React from "react";
import "../styles/Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <ul className="_nav__wrap">
            <li>Home</li>
            <li>About Us</li>
            <li>Drinks</li>
            <li>Meals</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
