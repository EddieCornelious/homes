import React from "react";
import "../styles/Reservation.scss";

const Reservation = () => {
  return (
    <section className="reservation">
      <h3>Reservation</h3>
      <p>(818)-443-5567 for details</p>
      <a className="wow rubberBand" href="#">
        Reserve Now
      </a>
    </section>
  );
};

export default Reservation;
