import React from "react";
import "../styles/WelcomeSection.scss";

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
            <div className="col-md-4">lol</div>
            <div className="col-md-4">lol</div>
            <div className="col-md-4">lol</div>
          </div>
        </div>
      </section>
    );
  }
}

export default WelcomeSection;
