import "../styles/Campaign.scss";
import React from "react";

const Campaign = () => {
  return (
    <section className="campaign">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="campaign__left">
              <div className="campaign__left__content">
                <h3>Newly-launched campaign in Whitby agencies</h3>
                <ul>
                  <li>Ut aliquam purus sit amet luctus</li>
                  <li>Ut aliquam purus sit amet luctus</li>
                  <li>Ut aliquam purus sit amet luctus</li>
                  <li>Ut aliquam purus sit amet luctus</li>
                  <li>Ut aliquam purus sit amet luctus</li>
                </ul>
                <p>Signature</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="campaign__right">&nbsp;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
