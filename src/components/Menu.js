import React from "react";
import "../styles/Menu.scss";

const MenuItem = () => {
  return (
    <div className="col-md-4">
      <h1 className="menu__item__name">Salmon..............$6</h1>
      <p className="menu__item__desc">
        served warm and with walnut praline, crème fraiche
      </p>
    </div>
  );
};
const MenuRow = () => {
  return (
    <div className="menu__row">
      <div className="row">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__header__wrap">
        <p className="menu__boast">Always Deliscious</p>
        <h1 className="menu__title">Main Menu</h1>
        <div className="underline">&nbsp;</div>
      </div>
      <MenuRow />
      <MenuRow />
      <MenuRow />
    </div>
  );
};

export default Menu;
