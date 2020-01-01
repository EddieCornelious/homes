import "../styles/Slider.scss";
import React from "react";
import { cities } from "./data.js";

const SlideItem = props => {
  const data = cities[props.id];
  return (
    <div className="item">
      <img src={data.img} />
      <div className="slide__item__info">
        <a href="#">{data.name}&rarr;</a>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <div className="int__carousel owl-carousel owl-theme">
      <SlideItem id="0" />
      <SlideItem id="1" />
      <SlideItem id="2" />
      <SlideItem id="3" />
      <SlideItem id="4" />
    </div>
  );
};

export default Slider;
