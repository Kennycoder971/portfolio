import React, { Component } from "react";
import Home from "./home/Home";
import Header from "./common/Header";
import Navbar from "./common/Navbar";

export default class App extends Component {
  state = { isNavOpen: false };

  onClickOpenNav = () => {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  };
  render() {
    return (
      <div className="container">
        <Header onClickOpenNav={this.onClickOpenNav} />
        <Home onClickOpenNav={this.onClickOpenNav} />
        <Navbar isNavOpen={this.state.isNavOpen} />
      </div>
    );
  }
}
