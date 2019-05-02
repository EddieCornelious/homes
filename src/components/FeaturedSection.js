import "../styles/FeaturedSection.scss";
import React from "react";
import bg1 from "../images/house1.jpg";

const PropertyCard = () => {
  return (
    <div className="property__card">
      <div
        style={{ backgroundImage: "url(" + bg1 + ")" }}
        className="property__card__top"
      >
        <a href="#">forsale</a>
      </div>
      <div className="property__card__bottom">
        <div className="card__bottom__location">
          <h2>1890 NOrth Cambridge</h2>
          <p>
            <i class="fas fa-map-marker-alt" /> Beveryl Hills, CA 90210
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i class="fa fa-th-large" /> 800 sq ft.
          </p>
          <p>
            <i class="fa fa-car" /> 2 garages
          </p>

          <p>
            <i class="fa fa-bed" /> 3 bedrooms
          </p>
          <p>
            <i class="fa fa-shower" /> 1 bathrooms
          </p>
        </div>

        <div className="card__bottom__row">
          <p>
            <i class="fa fa-user" /> James Hunkle
          </p>
          <p>
            <i class="fa fa-clock" /> 1 days ago
          </p>
        </div>
        <div className="bottom__button">$150,000</div>
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
