import React from "react";
import ParallaxBanner from "./ParallaxBanner.js";
import Menu from "./Menu.js";
const DrinkSection = () => {
  return (
    <section className="drink__section">
      <ParallaxBanner id="2" />
      <Menu />
    </section>
  );
};

export default DrinkSection;
