import "../styles/App.scss";
import React from "react";
import MainSection from "./MainSection.js";
import WelcomeSection from "./WelcomeSection.js";
import MainMenuSection from "./MainMenuSection.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <MainSection />
        <WelcomeSection />
        <MainMenuSection />
      </div>
    );
  }
}

export default App;
