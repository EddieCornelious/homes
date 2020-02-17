import "bootstrap/dist/css/bootstrap.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "font-awesome/css/font-awesome.css";
import "owl.carousel";
import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import FeaturedSection from "./FeaturedSection.js";
import Logo from "./Logo.js";
import ResponsiveNav from "./ResponsiveNav.js";
import vid from "../images/traffic.mp4";

const Campaign = React.lazy(() => import("./Campaign.js"));
const RealtorsSection = React.lazy(() => import("./RealtorsSection.js"));
const Slider = React.lazy(() => import("./Slider.js"));
const LuxurySection = React.lazy(() => import("./LuxurySection.js"));
const PropertyDetails = React.lazy(() => import("./PropertyDetails.js"));

class App extends React.Component {
  state = {
    active: null
  };

  toggleDetail = homeId => {
    this.setState({
      active: homeId
    });
  };

  closeDetail = () => {
    this.setState({
      active: null
    });
  };

  render() {
    return (
      <React.Fragment>
        <React.Suspense fallback={<div>Loading...</div>}>
          <PropertyDetails
            closeDetail={this.closeDetail}
            active={this.state.active}
          />

          <ResponsiveNav />
        </React.Suspense>
        <Nav />
        <section className="header">
          <div className="header__content">
            <h1>Invest in Luxury.</h1>
            <h1>Live in Nature.</h1>
            <a href="#">Learn More</a>
          </div>
        </section>

        <FeaturedSection toggleDetail={this.toggleDetail} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Campaign />
          <RealtorsSection />
          <Slider />
          <div className="slider__bottom">
            <a href="#">International Properties&rarr;</a>
          </div>
          <LuxurySection />
        </React.Suspense>
        <footer>
          <div className="overlay">&nbsp;</div>

          <video autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source type="video/mp4" src={vid} />
          </video>

          <div className="footer__content">
            <h3>THE WORLD BEST REALESTATE</h3>
            <Logo />
            <p>#106, 1008 BEACH AVENUE, Columbus OH, V6E 1T7</p>
            <p>©2019 John & Wrink. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
