import React, { Component } from "react";
import MySkills from "./MySkills";

class SkillsContentManager extends Component {
  state = { currentTab: 0 };

  selectCurrentTab = (index) => {
    this.setState({ currentTab: index });
  };
  render() {
    return (
      <MySkills
        currentTab={this.state.currentTab}
        selectCurrentTab={this.selectCurrentTab}
      />
    );
  }
}

export default SkillsContentManager;
