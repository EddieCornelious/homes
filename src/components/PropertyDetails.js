import "../styles/PropertyDetails.scss";
import React from "react";
import { homes } from "./data.js";

const SlideItem = ({ imgUrl }) => {
  return (
    <div className="item">
      <img src={imgUrl} />
    </div>
  );
};

class PropertyDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(homes[this.props.active]);
    return (
      <div
        style={{ display: this.props.active === null ? "none" : "block" }}
        className="fixed__overlay"
      >
        <div onClick={() => this.props.closeDetail()} className="exit__detail">
          X
        </div>
        <div className="detail__carousel owl-carousel owl-theme">
          <SlideItem imgUrl={homes[this.props.active || 1].interior[0]} />
          <SlideItem imgUrl={homes[this.props.active || 1].interior[1]} />
          <SlideItem imgUrl={homes[this.props.active || 1].interior[2]} />
          <SlideItem imgUrl={homes[this.props.active || 1].interior[3]} />
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
