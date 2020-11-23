import React, { Component } from "react";
import Home from "./home/Home";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = { isNavOpen: false };

  onClickOpenNav = () => {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Header onClickOpenNav={this.onClickOpenNav} />
          <Navbar />

          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Contact} path="/contact" />
            <Route component={Portfolio} path="/portfolio" />
            <Route component={Contact} path="/contact" />
          </Switch>
        </div>
      </Router>
    );
  }
}
