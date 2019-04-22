import "../styles/App.scss";
import React from "react";
import MainSection from "./MainSection.js";
import WelcomeSection from "./WelcomeSection.js";
import MainMenuSection from "./MainMenuSection.js";
import DessertSection from "./DessertSection.js";
import DrinkSection from "./DrinkSection.js";
import Reservation from "./Reservation.js";
import Footer from "./Footer.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <MainSection />
        <WelcomeSection />
        <MainMenuSection />
        <DessertSection />
        <DrinkSection />
        <Reservation />
        <Footer />
      </div>
    );
  }
}

export default App;
