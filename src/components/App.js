import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import FeaturedSection from "./FeaturedSection.js";
import Campaign from "./Campaign.js";
import RealatorsSection from "./RealatorsSection.js";
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
        <RealatorsSection />
      </React.Fragment>
    );
  }
}

export default App;
