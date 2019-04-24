import "../styles/TestimonySection.scss";
import React from "react";

const Testimony = props => {
  return (
    <div className="testimony">
      <h3>5,000</h3>
      <p>Happy People</p>
    </div>
  );
};
const TestimonySection = props => {
  return (
    <section className="testimony__section">
      <div className="container">
        <div className="col-md-3">
          <Testimony />
        </div>
        <div className="col-md-3">
          <Testimony />
        </div>
        <div className="col-md-3">
          <Testimony />
        </div>
        <div className="col-md-3">
          <Testimony />
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
