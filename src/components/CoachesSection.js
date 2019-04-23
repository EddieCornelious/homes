import "../styles/CoachesSection.scss";
import React from "react";
import SectionHeader from "./SectionHeader.js";
import t1 from "../images/trainer-1.jpg";
import t2 from "../images/trainer-2.jpg";
import t3 from "../images/trainer-3.jpg";
import t4 from "../images/trainer-4.jpg";
import t5 from "../images/trainer-5.jpg";
import t6 from "../images/trainer-6.jpg";

const data = {
  0: {
    image: t1,
    name: "Jake Johnson",
    info:
      "Jake is a fitness expert with over twenty years of experience as a professional track athlete. Jake also competed in the 2008 olympics."
  },
  1: {
    image: t2,
    name: "Ricardo Almeida",
    info:
      "Ricardo is one of our youngest fitness experts on hand, but he is also a higly rated fitness professional with over 1 million YouTube subscribers."
  },
  2: {
    image: t3,
    name: "Jose` Calvon",
    info:
      "Jose` is a professional boxer with over 30 wins in his career. He even challenged for the IBF lightweight boxing world championships in 2015."
  },
  3: {
    image: t4,
    name: "Jaime Rutgers",
    info:
      "Jaime is our most experienced fitness professional with a specialty in helping her clients burn fat while also building muscle."
  },
  4: {
    image: t5,
    name: "Blake Heinzbeck",
    info:
      "Blake is the leader of our cheapest plan (see plans below). He is also a loving father of two beautiful little girls."
  },
  5: {
    image: t6,
    name: "Lisa Tourney",
    info:
      "Lisa was voted the best trainer 2 years in a row by the National Fitness Coalition Experts Association. She also has a deep passion for not just fitness, but healthy eating as well."
  }
};

const SectionCard = props => {
  return (
    <div
      style={{ backgroundImage: "url(" + data[props.id].image + ")" }}
      className="coach__card"
    >
      &nbsp;
    </div>
  );
};

const CardOverlay = props => {
  return (
    <div className="bg">
      <div className="bg__content">
        <h3>{data[props.id].name}</h3>
        <p>{data[props.id].info}</p>
      </div>
    </div>
  );
};
const CoachesSection = props => {
  return (
    <section className="coach__section">
      <SectionHeader title="coaches" subTitle="choose your coach" />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-4">
            <CardOverlay id="0" />
            <SectionCard id="0" />
          </div>
          <div className="col-md-4">
            <CardOverlay id="1" />
            <SectionCard id="1" />
          </div>
          <div className="col-md-4">
            <CardOverlay id="2" />
            <SectionCard id="2" />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4">
            <CardOverlay id="3" />
            <SectionCard id="3" />
          </div>
          <div className="col-md-4">
            <CardOverlay id="4" />
            <SectionCard id="4" />
          </div>
          <div className="col-md-4">
            <CardOverlay id="5" />
            <SectionCard id="5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
