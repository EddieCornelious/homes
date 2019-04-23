import "../styles/WhySection.scss";
import React from "react";

import { ReactComponent as Logo1 } from "../images/flower.svg";
import { ReactComponent as Logo2 } from "../images/heart.svg";
import { ReactComponent as Logo3 } from "../images/leaf.svg";
import { ReactComponent as Logo4 } from "../images/sunny.svg";
const data = {
  0: {
    title: "healthy lifestyle",
    text:
      "A healthy lifestyle is key in order o maintain a healthy mind and body."
  },
  1: {
    title: "body and mind balance",
    text:
      "At FitHealth, we believe that the body and mind are our lifeforces and as such, should guard them with honest intent."
  },
  3: {
    title: "meditation",
    text:
      "All of our programs include a 10 minute meditation sequence so clients can build their mental strength as well as physical."
  },
  2: {
    title: "eco-friendly",
    text:
      "We recycle everything in our facilities that can be recycled. Including water bottles, all other plastics and cardboard."
  }
};
const WhyCard = props => {
  return (
    <div className="why__card">
      <div className="why__card__icon__wrap">{props.logo}</div>
      <h2>{data[props.id].title}</h2>
      <p>{data[props.id].text}</p>
    </div>
  );
};
const WhySection = () => {
  return (
    <section className="why__section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <WhyCard id="0" logo={<Logo1 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard id="1" logo={<Logo2 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard id="2" logo={<Logo3 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard id="3" logo={<Logo4 />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
