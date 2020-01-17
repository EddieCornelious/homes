import "../styles/RealtorsSection.scss";
import React from "react";
import { realtors } from "./data.js";

const RealtorCard = props => {
  const data = realtors[props.id];

  return (
    <div className="realtor__card">
      <div className="realtor__card__top">
        <div className="realtor__card__left">
          <img src={data.img} />
        </div>

        <div className="realtor__card__right">
          <h3>{data.name}</h3>
          <em>Phone: {data.number}</em>
        </div>
      </div>

      <div className="realtor__card__bottom">{data.info}</div>
    </div>
  );
};
const RealtorsSection = () => {
  return (
    <section className="realtors__section blend-multiply">
      <div className="container">
        <h1>Our Realtors</h1>
        <div className="row">
          <div className="col-md-6">
            <RealtorCard id="0" />
          </div>

          <div className="col-md-6">
            <RealtorCard id="1" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RealtorCard id="2" />
          </div>

          <div className="col-md-6">
            <RealtorCard id="3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtorsSection;
