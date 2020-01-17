import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Redux from "./redux";
import ReactBasic from "./reactBasic";
import Start from "./start";
import Nav from "./nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      data: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("https://cwpeng.github.io/live-records-samples/data/content.json")
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }));
  }

  //Html + function
  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading ...</div>;
    }
    console.log(data);
    const titles = data.chapters.map(title => title.key);
    const sections = data.chapters.map(section => section.sections);
    console.log(sections);

    return (
      <Router>
        <div>
          <Nav data={this.state.data} isLoading={this.state.isLoading} />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <h1>{data.headline}</h1>
              </React.Fragment>
            )}
          />

          <Route
            path={"/" + titles[0]}
            render={props => <Start {...props} data={sections[0]} />}
          />

          <Route
            path={"/" + titles[1]}
            render={props => <ReactBasic {...props} data={sections[1]} />}
          />

          <Route
            path={"/" + titles[2]}
            render={props => <Redux {...props} data={sections[2]} />}
          />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
