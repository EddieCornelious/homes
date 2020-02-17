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

  renderDetails(list, homeId) {
    const res = [];
    for (let i = 0; i < list.length; i++) {
      res.push(<SlideItem key={i} imgUrl={list[i]} />);
    }
    return res;
  }

  render() {
    const index = this.props.active === null ? 1 : this.props.active;
    return (
      <div
        style={{ display: this.props.active === null ? "none" : "block" }}
        className="fixed__overlay"
      >
        <div onClick={() => this.props.closeDetail()} className="exit__detail">
          X
        </div>
        <div className="detail__carousel owl-carousel owl-theme">
          {this.renderDetails(homes[index].interior, index)}
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
