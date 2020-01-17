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
            path="/redux"
            render={props => (
              <Redux {...props} data={data.chapters[2].sections} />
            )}
          />
          <Route
            path="/react"
            render={props => (
              <ReactBasic {...props} data={data.chapters[1].sections} />
            )}
          />
          <Route
            path="/start"
            render={props => (
              <Start {...props} data={data.chapters[0].sections} />
            )}
          />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
