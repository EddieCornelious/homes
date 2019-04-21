import React from "react";
import "../styles/MainMenuSection.scss";
import MainMenuPhotos from "./MainMenuPhotos.js";

const MainMenuSection = () => {
  return (
    <section className="main__menu__section">
      <MainMenuPhotos />
    </section>
  );
};

export default MainMenuSection;
