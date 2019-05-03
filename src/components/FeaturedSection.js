import "../styles/FeaturedSection.scss";
import React from "react";
import { homes } from "./data.js";

const PropertyCard = props => {
  const data = homes[props.id];
  return (
    <div className="property__card">
      <div
        style={{ backgroundImage: "url(" + data.img + ")" }}
        className="property__card__top"
      >
        <a href="#">{data.status === 1 ? "for sale" : "for rent"}</a>
      </div>
      <div className="property__card__bottom">
        <div className="card__bottom__location">
          <h2>{data.address}</h2>
          <p>
            <i class="fas fa-map-marker-alt" />
            {data.city}
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i class="fa fa-th-large" /> {data.size + "sq ft."}
          </p>
          <p>
            <i class="fa fa-car" /> {data.garage + " garages"}
          </p>

          <p>
            <i class="fa fa-bed" /> {data.bed + " bedrooms"}
          </p>
          <p>
            <i class="fa fa-shower" /> {data.bath + " bathrooms"}
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i class="fa fa-user" /> {data.realator}
          </p>
          <p>
            <i class="fa fa-clock" /> {data.posted + " days ago"}
          </p>
        </div>
        <div className="bottom__button">{"$" + data.price}</div>
      </div>
    </div>
  );
};
const FeaturedSection = () => {
  return (
    <section className="featured__section">
      <div className="container">
        <h1>Featured Section</h1>
        <div className="row no-gutters">
          <div className="col-md-4">
            <PropertyCard id="0" />
          </div>
          <div className="col-md-4">
            <PropertyCard id="1" />
          </div>
          <div className="col-md-4">
            <PropertyCard id="2" />
          </div>
          <div className="col-md-4">
            <PropertyCard id="3" />
          </div>
          <div className="col-md-4">
            <PropertyCard id="4" />
          </div>
          <div className="col-md-4">
            <PropertyCard id="5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
