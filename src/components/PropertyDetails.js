import "../styles/PropertyDetails.scss";
import React from "react";
import { homes } from "./data.js";

class PropertyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  render() {
    return (
      <div style={{ display: "none" }} className="fixed__overlay">
        <div className="">hi</div>
      </div>
    );
  }
}

export default PropertyDetails;
