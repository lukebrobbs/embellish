import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PageNotFound from "./components/404/404";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
