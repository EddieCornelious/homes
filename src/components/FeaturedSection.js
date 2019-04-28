import "../styles/FeaturedSection.scss";
import React from "react";

const PropertyCard = () => {
  return (
    <div className="property__card">
      <div className="property__card__top">
        <a href="#">sold</a>
      </div>
      <div className="property__card__bottom">k</div>
    </div>
  );
};
const FeaturedSection = () => {
  return (
    <section className="featured__section">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-4">
            <PropertyCard />
          </div>
          <div className="col-md-4">
            <PropertyCard />
          </div>
          <div className="col-md-4">
            <PropertyCard />
          </div>
          <div className="col-md-4">
            <PropertyCard />
          </div>
          <div className="col-md-4">
            <PropertyCard />
          </div>
          <div className="col-md-4">
            <PropertyCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
