import React from "react";
import { Link } from "react-router-dom";

class Redux extends React.Component {
  constructor(props) {
    super(props);
    //state
  }

  //Html + function
  render() {
    const data = this.props.data;
    console.log(data);
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

export default Redux;
