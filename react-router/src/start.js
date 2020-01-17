import React from "react";
import { Link } from "react-router-dom";

class Start extends React.Component {
  constructor(props) {
    super(props);
    //state
  }
  render() {
    const data = this.props.data;
    return (
      <React.Fragment>
        <ul>
          {data.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
        <Link to="/">回首頁</Link>
      </React.Fragment>
    );
  }
}

export default Start;
