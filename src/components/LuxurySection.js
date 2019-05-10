import "../styles/LuxurySection.scss";
import React from "react";
import { luxuryProperties } from "./data.js";

const LuxuryText = () => {
  return (
    <section className="luxury__text">
      <div className="container">
        <h3>THE EVOLVING WORLD OF LUXURY LIVING</h3>
        <hr />
        <p>
          On the surface our story is deceptively simple, but exactly how we
          give it life is highly sophisticated. Collaborating with our
          extraordinary developer clientele, we create desire and demand for
          luxury real estate in the great financial, social, cultural and
          recreational capitals of the world. Like the world class architects
          and designers they select, this new wave of developers is dedicated to
          crafting the most geometrically inspiring and emotionally moving
          structures imaginable. Our role is to market those residences to
          discerning buyers and to help guide developer, architect and buyer
          alike in an evolving world of luxury living.
        </p>
      </div>
    </section>
  );
};

const LuxuryOption = props => {
  const data = luxuryProperties[props.id];
  const spaceIndex = data.text.indexOf(" ");

  return (
    <div className="luxury__option">
      <div
        style={{ backgroundImage: "url(" + data.img + ")" }}
        className="luxury__bg"
      >
        &nbsp;
      </div>
      <div className="luxury__content">
        <h3>
          <span className="first__word">{data.text.slice(0, spaceIndex)}</span>
          <span className="second__word">
            {data.text.slice(spaceIndex + 1)}
          </span>
        </h3>
        <a className="luxury__btn" href="#">
          view
        </a>
      </div>
    </div>
  );
};

const LuxuryOptions = () => {
  return (
    <section className="luxury__options">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-6">
            <LuxuryOption id="0" />
          </div>
          <div className="col-md-6">
            <LuxuryOption id="1" />
          </div>
          <div className="col-md-6">
            <LuxuryOption id="2" />
          </div>
          <div className="col-md-6">
            <LuxuryOption id="3" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LuxurySection = () => {
  return (
    <React.Fragment>
      <LuxuryText />
      <LuxuryOptions />
      <div>loso</div>
    </React.Fragment>
  );
};

export default LuxurySection;
