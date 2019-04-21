import React from "react";
import "../styles/WelcomeSection.scss";

import WelcomeCard from "./WelcomeCard.js";

class WelcomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <section className="welcome__section">
        <div class="container">
          <div className="welcome__section__text__wrap">
            <h3 className="welcome__section__header">
              Welcome to
              <span className="welcome__section__header__right">
                {" "}
                Mauneul's
              </span>
            </h3>
            <p>Whatever your occasion, We makes it one to remember!</p>
          </div>
          <div className="welcome__section__description">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <WelcomeCard
                id="0"
                text="Everday Open"
                info="Consectetuer adipiscing elit lorem ipsum dolor sit amet, sed diam nonummy nibh euismod."
              />
            </div>
            <div className="col-md-4">
              <WelcomeCard
                id="1"
                text="special dishes"
                info="Consectetuer adipiscing elit lorem ipsum dolor sit amet, sed diam nonummy nibh euismod."
              />
            </div>
            <div className="col-md-4">
              <WelcomeCard
                id="2"
                text="expert chef"
                info="Consectetuer adipiscing elit lorem ipsum dolor sit amet, sed diam nonummy nibh euismod."
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WelcomeSection;
