import React from "react";
import "../styles/MainMenuPhotos.scss";
import bg1 from "../images/pasta.jpg";
import bg2 from "../images/salmon.jpg";
import bg3 from "../images/pizza.jpg";

const MainMenuPhotos = () => {
  return (
    <div className="main__menu__photos__wrap">
      <div className="main__menu__photos__left__parent">
        <div
          style={{ backgroundImage: "url(" + bg1 + ")" }}
          className="left__bg"
        >
          &nbsp;
        </div>

        <p className="left__text">Italian Pasta</p>
      </div>

      <div className="main__menu__photos__right">
        <div className="main__menu__photos__top__parent">
          <div
            style={{ backgroundImage: "url(" + bg2 + ")" }}
            className="top__bg"
          >
            &nbsp;
          </div>
          <p className="top__text">Pink Salmon</p>
        </div>

        <div className="main__menu__photos__bottom__parent">
          <div
            style={{ backgroundImage: "url(" + bg3 + ")" }}
            className="bottom__bg"
          >
            &nbsp;
          </div>
          <p className="bottom__text">Pepperonni Pizza</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenuPhotos;
