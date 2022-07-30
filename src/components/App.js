import 'bootstrap/dist/css/bootstrap.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'font-awesome/css/font-awesome.css';
import 'owl.carousel';
import '../styles/App.scss';
import React from 'react';
import Nav from './Nav.js';
import FeaturedSection from './FeaturedSection.js';
import PropertyDetails from './PropertyDetails.js';
import Logo from './Logo.js';
import ResponsiveNav from './ResponsiveNav.js';
import vid from '../images/traffic.mp4';
import video from '../villa.mp4';
import Campaign from './Campaign.js';
import RealtorsSection from './RealtorsSection.js';
import Slider from './Slider.js';
import LuxurySection from './LuxurySection.js';

class App extends React.Component {
  state = {
    active: null,
  };

  toggleDetail = (homeId) => {
    this.setState({
      active: homeId,
    });
  };

  closeDetail = () => {
    this.setState({
      active: null,
    });
  };

  render() {
    return (
      <React.Fragment>
        <PropertyDetails
          closeDetail={this.closeDetail}
          active={this.state.active}
        />
        <ResponsiveNav />
        <Nav />
        <section className="header">
          <video autoPlay={true} muted={true} loop={true}>
            <source src={video} type="video/mp4" />
          </video>
          <div className="header__content">
            <h1>Invest in Luxury.</h1>
            <h1>Live in Nature.</h1>
            <a href="#">Learn More</a>
          </div>
        </section>

        <FeaturedSection toggleDetail={this.toggleDetail} />

        <Campaign />
        <RealtorsSection />
        <Slider />
        <div className="slider__bottom">
          <a href="#">International Properties&rarr;</a>
        </div>
        <LuxurySection />

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
