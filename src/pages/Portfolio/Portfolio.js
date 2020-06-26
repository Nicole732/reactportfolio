import React, { Component } from "react";
import LanguagesDisplay from "../../components/LanguagesDisplay";

class Portfolio extends Component {
  state = {
    languages: [
      { name: "Html", proficiency: "Advanced" },
      { name: "CSS", proficiency: "Advanced" },
      { name: "Javascript", proficiency: "Advanced" },
      { name: "React", proficiency: "Advanced" },
    ],
  };
  render() {
    return (
      <div>
        <h1>Languages and Technologies Proficiency</h1>
        <button> View </button>
        <LanguagesDisplay
          name={this.state.languages[0].name}
          proficiency={this.state.languages[1].proficiency}
        />
      </div>
    );
  }
}
export default Portfolio;
