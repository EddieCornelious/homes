import "../styles/LuxurySection.scss";
import React from "react";
import { luxuryProperties, luxuryTextData } from "./data.js";
import LazyLoad from "react-lazyload";

const LuxuryText = props => {
  return (
    <section className="luxury__text">
      <div className="container">
        <h3>{props.title}</h3>
        <hr />
        <p>{props.text}</p>
      </div>
    </section>
  );
};

const LuxuryOption = props => {
  const data = luxuryProperties[props.id];
  const spaceIndex = data.text.indexOf(" ");

  return (
    <LazyLoad height={"50vh"} offset={400}>
      <div className="luxury__option">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(" +
              data.img +
              ")"
          }}
          className="luxury__bg"
        >
          &nbsp;
        </div>
        <div className="luxury__content">
          <h3>
            <span className="first__word">
              {data.text.slice(0, spaceIndex)}
            </span>
            <span className="second__word">
              {data.text.slice(spaceIndex + 1)}
            </span>
          </h3>
          <a className="luxury__btn" href="#">
            view
          </a>
        </div>
      </div>
    </LazyLoad>
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
      <LuxuryText
        title="THE EVOLVING WORLD OF LUXURY LIVING"
        text={luxuryTextData[0]}
      />
      <LuxuryOptions />
      <LuxuryText
        title="#1 RATED LUXURY REAL-ESTATE AGENCY 5 YEARS IN A ROW"
        text={luxuryTextData[1]}
      />
    </React.Fragment>
  );
};

export default LuxurySection;
