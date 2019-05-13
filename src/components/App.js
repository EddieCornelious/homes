import "bootstrap/dist/css/bootstrap.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "font-awesome/css/font-awesome.css";
import "owl.carousel";

import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import FeaturedSection from "./FeaturedSection.js";
import Campaign from "./Campaign.js";
import RealtorsSection from "./RealtorsSection.js";
import Slider from "./Slider.js";
import LuxurySection from "./LuxurySection.js";
import Logo from "./Logo.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <section className="header">
          <div className="header__content">
            <h1>Invest in Luxury.</h1>
            <h1>Live in Nature.</h1>
            <a href="#">Learn More</a>
          </div>
        </section>

        <FeaturedSection />
        <Campaign />
        <RealtorsSection />
        <Slider />
        <div className="slider__bottom">
          <a href="#">International Properties&rarr;</a>
        </div>
        <LuxurySection />
        <footer>
          <h3>THE WORLD BEST REALESTATE</h3>
          <Logo />
          <p>#106, 1008 BEACH AVENUE, Columbus OH, V6E 1T7</p>
          <p>©2019 Company Name CORP. ALL RIGHTS RESERVED.</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
