import React from "react";
import MainMenuPhotos from "./MainMenuPhotos.js";
import Menu from "./Menu.js";

const MainMenuSection = () => {
  return (
    <section className="main__menu__section">
      <MainMenuPhotos />
      <Menu />
    </section>
  );
};

export default MainMenuSection;
