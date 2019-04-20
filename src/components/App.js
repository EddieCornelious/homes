import "../styles/App.scss";
import React from "react";
import MainSection from "./MainSection.js";
import WelcomeSection from "./WelcomeSection.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <MainSection />
        <WelcomeSection />
      </div>
    );
  }
}

export default App;
