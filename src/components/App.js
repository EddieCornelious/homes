import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import WhySection from "./WhySection.js";
import CoachesSection from "./CoachesSection.js";
import PlansSection from "./PlansSection.js";
import TestimonySection from "./TestimonySection.js";
import AppointmentSection from "./AppointmentSection.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero__text__wrap">
            <h1>Fitness & Health is a Mentality</h1>
            <p>Let us help you cultivate a fitness lifestyle</p>
            <a href="#">Start your journey</a>
          </div>
        </div>
        <WhySection />
        <CoachesSection />
        <PlansSection />
        <TestimonySection />
        <AppointmentSection />
      </div>
    );
  }
}

export default App;
