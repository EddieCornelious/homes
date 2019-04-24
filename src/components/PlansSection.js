import "../styles/PlansSection.scss";
import React from "react";
import SectionHeader from "./SectionHeader.js";
import dumbell from "../images/dumbell.jpg";
import kettle from "../images/kettle.jpg";
import weights from "../images/weights.jpg";
const data = {
  0: dumbell,
  1: kettle,
  2: weights
};

const PlansCard = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            style={{ backgroundImage: "url(" + data[props.id] + ")" }}
            className="flip__card__top"
          >
            <div className="top__text__wrap">
              <h3 className="h1">the forest</h3>

              <h3 className="h2">hiker</h3>
            </div>
          </div>
          <div className="flip__card__bottom">
            <ul>
              <li>LOL</li>
              <li>LOL</li>
              <li>LOL</li>
              <li>LOL</li>
              <li>LOL</li>
            </ul>
          </div>
        </div>
        <div className="flip-card-back">
          <p>only</p>
          <h3>766</h3>
          <a href="#">Book Now!</a>
        </div>
      </div>
    </div>
  );
};

const PlansSection = props => {
  return (
    <section className="plans__section">
      <SectionHeader title="plans" subTitle="Choose a plan" />
      <div className="row some-gutters">
        <div className="container-fluid">
          <div className="col-md-4">
            <PlansCard id="0" />
          </div>
          <div className="col-md-4">
            <PlansCard id="1" />
          </div>
          <div className="col-md-4">
            <PlansCard id="2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
