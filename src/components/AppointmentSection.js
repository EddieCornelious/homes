import "../styles/AppointmentSection.scss";
import React from "react";

const AppointmentSection = () => {
  return (
    <section className="appointment__section">
      <div className="map__wrap">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105741.93683977883!2d-118.41431951210578!3d34.08398165449827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf481974533d%3A0x47d0665ff034f5f5!2sRoscoe&#39;s+Chicken+%26+Waffles+-+Hollywood!5e0!3m2!1sen!2sus!4v1556136461254!5m2!1sen!2sus"
        />
      </div>
      <div className="booking">
        <div className="booking__content">
          <h2>Book Appointment</h2>
          <input placeHolder="First Name" className="fName" type="text" />
          <input placeHolder="Last Name" className="lName" type="text" />
          <input placeHolder="Date" className="date" type="text" />
          <input placeHolder="Time" className="time" type="text" />
          <input placeHolder="Phone" className="phone" type="text" />
          <input placeHolder="Message" className="msg" type="text" />
          <a href="#">Book Now</a>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
