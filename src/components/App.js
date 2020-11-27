import React, { Component } from "react";
import Home from "./home/Home";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import RightNav from "./common/RightNav";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Page404 from "./404/Page404";
import SpotySound from "./portfolio/projects/SpotySound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = { isNavOpen: false };

  setIsNavOpen = (value) => {
    this.setState({ isNavOpen: value });
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Header setIsNavOpen={this.setIsNavOpen} />
          <Navbar />
          <RightNav
            setIsNavOpen={this.setIsNavOpen}
            isNavOpen={this.state.isNavOpen}
          />

          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Portfolio} path="/portfolio" />
            <Route component={SpotySound} path="/portfolio/spotysound" />
            <Route component={Skills} path="/competences" />
            <Route component={Contact} path="/contact" />
            <Route component={Page404} path="/*" />
          </Switch>
        </div>
      </Router>
    );
  }
}
