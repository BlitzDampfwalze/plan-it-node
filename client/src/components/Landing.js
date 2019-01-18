import React from "react";

import "../style/landing.css";

export class Landing extends React.Component {


  render() {

    return (
      <div className="landing-container">
        <div className="landing-overlay">
          <h1 className="landing-h1">Plan-it</h1>
          <div className="landing-subhead">
            <h2 className="landing-h2">Bringing effectiveness to your group's travel planning</h2>
            <div className="landing-more-wrapper">
              <div className="accordion" onClick={this.handleAccordion}>read more here...</div>
              <div className="panel">
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
