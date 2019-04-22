import React from "react";
import "../styles/Menu.scss";

const MenuItem = props => {
  return (
    <div className="col-sm-4 col-md-4">
      <h1 className="menu__item__name">
        {props.itemName + "............ $" + props.price}
      </h1>
      <p className="menu__item__desc">{props.description}</p>
    </div>
  );
};

const MenuRow = ({ data }) => {
  return (
    <div className=" wow fadeIn menu__row">
      <div className="row">
        {data.map(element => {
          return (
            <MenuItem
              key={element.itemName}
              itemName={element.itemName}
              description={element.description}
              price={element.price}
            />
          );
        })}
      </div>
    </div>
  );
};

const Menu = props => {
  return (
    <div className="menu">
      <div className="menu__header__wrap">
        <p className="menu__boast">{props.boast}</p>
        <h1 className="menu__title">{props.title}</h1>
        <div className="underline">&nbsp;</div>
      </div>
      <MenuRow data={props.menuData.slice(0, 3)} />
      <MenuRow data={props.menuData.slice(3, 6)} />
      <MenuRow data={props.menuData.slice(6, 9)} />
    </div>
  );
};

export default Menu;
