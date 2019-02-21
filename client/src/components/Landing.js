import React from "react";

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
    let more = this.state.more ? <p onClick={this.handleMore}>Plan-it was created to assist in coordinating a group’s effort to effectively plan together synchronously or asynchronously. Once a new trip is created, the user can join that room to begin creating a schedule for their group’s trip. The task pane in the trip room allows users to assign and distribute tasks, such as research about particularly events, places, and things to do, so everyone’s time is maximized and no double effort waste occurs. </p> : null;

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
