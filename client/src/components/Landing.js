import React from "react";

// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import "../style/landing.css";

const Landing = () => (
  <div className="landing-container">
    <h1 className="landing-h1">Plan-it</h1>
    <h2 className="landing-h2">Brining effectiveness to group trip planning</h2>
    <div className="landing-more-wrapper">
      <div className="accordion">read more...</div>
      <div className="panel">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
    </div>
  </div>
)



// import "../style/eventcard.css";

// export class Landing extends React.Component {


//   render() {

//     return (
//       <div className="card-container item">
//       landing
//       </div>
//     )
//   }

// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
export default Landing;