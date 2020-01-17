import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    //state
  }

  //Html + function
  render() {
    const data = this.props.data;
    console.log(data);

    let titles = data.chapters;
    return (
      <div>
        <ul>
          {titles.map((title, i) => (
            <Link to={title.key} key={i}>
              <li>{title.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
