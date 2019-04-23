import "../styles/CoachSection.scss";
import React from "react";
import SectionHeader from "./SectionHeader.js";

const SectionCard = () => {
  return <div className="coach__card">&nbsp;</div>;
};
const CoachSection = props => {
  return (
    <section className="coach__section">
      <SectionHeader />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="bg">lol</div>
            <SectionCard />
          </div>
          <div className="col-md-4">
            <div className="bg" />
            <SectionCard />
          </div>
          <div className="col-md-4">
            <div className="bg" />
            <SectionCard />
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="bg" />
            <SectionCard />
          </div>
          <div className="col-md-4">
            <div className="bg" />
            <SectionCard />
          </div>
          <div className="col-md-4">
            <div className="bg" />
            <SectionCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
