import React from "react";
import ParallaxBanner from "./ParallaxBanner.js";
import Menu from "./Menu.js";

const DessertSection = () => {
  return (
    <section className="dessert__section">
      <ParallaxBanner id="1" />
      <Menu />
    </section>
  );
};

export default DessertSection;
