import "../styles/FeaturedSection.scss";
import React from "react";
import { homes } from "./data.js";

const PropertyCard = props => {
  const data = homes[props.id];
  return (
    <div className="property__card">
      <div className="property__card__top">
        <img alt="property image" src={data.img} />
        <a className="availability" href="#">
          {data.status === 1 ? "for sale" : "for rent"}
        </a>
        <a
          onClick={() => props.toggleDetail(props.id)}
          className="property__info"
        >
          View More &rarr;
        </a>
      </div>
      <div className="property__card__bottom">
        <div className="card__bottom__location">
          <h2>{data.address}</h2>
          <p>
            <i className="fas fa-map-marker-alt" />
            {data.city}
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i className="fa fa-th-large" /> {data.size + "sq ft."}
          </p>
          <p>
            <i className="fa fa-car" /> {data.garage + " garages"}
          </p>

          <p>
            <i className="fa fa-bed" /> {data.bed + " bedrooms"}
          </p>
          <p>
            <i className="fa fa-shower" /> {data.bath + " bathrooms"}
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i className="fa fa-user" /> {data.realator}
          </p>
          <p>
            <i className="fa fa-clock" /> {data.posted + " days ago"}
          </p>
        </div>
        <div className="bottom__button">{"$" + data.price}</div>
      </div>
    </div>
  );
};
const FeaturedSection = props => {
  return (
    <section className="featured__section">
      <div className="container">
        <h1>Featured Section</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={0} />
          </div>
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={1} />
          </div>
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={2} />
          </div>
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={3} />
          </div>
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={4} />
          </div>
          <div className="col-sm-6 col-md-4">
            <PropertyCard toggleDetail={props.toggleDetail} id={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
