import "../styles/RealatorsSection.scss";
import React from "react";

const RealatorCard = () => {
  return <div className="realator__card">i</div>;
};
const RealatorsSection = () => {
  return (
    <section className="realators__section">
      <div className="container-fluid">
        <h1>Our Realators</h1>
        <div className="row">
          <div className="col-md-6">
            <RealatorCard />
          </div>

          <div className="col-md-6">
            <RealatorCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RealatorCard />
          </div>

          <div className="col-md-6">
            <RealatorCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealatorsSection;
