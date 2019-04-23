import "../styles/WhySection.scss";
import React from "react";

import { ReactComponent as Logo1 } from "../images/flower.svg";
import { ReactComponent as Logo2 } from "../images/heart.svg";
import { ReactComponent as Logo3 } from "../images/leaf.svg";
import { ReactComponent as Logo4 } from "../images/sunny.svg";

const WhyCard = props => {
  return (
    <div className="why__card">
      <div className="why__card__icon__wrap">{props.logo}</div>
      <h2>Healthy Lifetyle</h2>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country
      </p>
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
            <WhyCard logo={<Logo1 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard logo={<Logo2 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard logo={<Logo3 />} />
          </div>
          <div className="col-md-3">
            {" "}
            <WhyCard logo={<Logo4 />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
