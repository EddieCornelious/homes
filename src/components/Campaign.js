import "../styles/Campaign.scss";
import React from "react";
import LazyLoad from "react-lazyload";

const Campaign = () => {
  return (
    <section className="campaign">
      <div style={{ padding: 0 }} className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="campaign__left">
              <div className="campaign__left__content">
                <h3>Newly-launched campaign in Whitby agencies</h3>
                <ul>
                  <li>Improved turn-around time for new purchases</li>
                  <li>24 hour customer-service reps</li>
                  <li>Exclusive property deals with first signup</li>
                  <li>Real-time access to property listing</li>
                  <li>Overall improved user experience</li>
                </ul>
                <p>Signature</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <LazyLoad offset={400} height={"64rem"}>
              <div className="campaign__right">&nbsp;</div>
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
