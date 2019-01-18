import React from "react";

import { Link } from "react-router-dom";

import "../style/landing.css";

export class Landing extends React.Component {

  state = {
    more: false
  }

  handleMore = () => {
    this.setState({ more: !this.state.more })
  }

  render() {
    let readMore = this.state.more ? null : <span>Read more...</span>
    let more = this.state.more ? <p onClick={this.handleMore}>m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing </p> : null;

    return (
      <div className="landing-container">
        <div className="landing-overlay">
          <h1 className="landing-h1">Plan-it</h1>
          <div className="landing-subhead">
            <h2 className="landing-h2">Bringing effectiveness to your group's travel planning</h2>
            <div className="landing-more-wrapper">
              <div className="accordion" onClick={this.handleMore}>{readMore}{more}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
