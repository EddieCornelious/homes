import React from "react";
import "../styles/WelcomeCard.scss";

import { ReactComponent as Logo3 } from "../images/check_mark.svg";
import { ReactComponent as Logo2 } from "../images/restaurant.svg";
import { ReactComponent as Logo1 } from "../images/time.svg";
const logoArray = [<Logo1 />, <Logo2 />, <Logo3 />];
const WelcomeCard = props => {
  return (
    <div className="wow fadeIn welcome__card">
      {logoArray[props.id]}
      <h3 className="welcome__card__header">{props.text}</h3>
      <p className="welcome__card__text">{props.info}</p>
    </div>
  );
};

export default WelcomeCard;
