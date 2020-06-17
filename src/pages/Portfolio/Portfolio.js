import React, { Component } from "react";

export default class Portfolio extends Component {
  state = {
    languages: [
      { name: "Html", proficiency: "Advanced" },
      { name: "CSS", proficiency: "Advanced" },
      { name: "Javascript", proficiency: "Advanced" },
      { name: "React", proficiency: "Advanced" }
    ]
  }
  render() {
    return (
        <div>
            <h1>Languages and Technologies Proficiency</h1>
            <button> View </button>
            <LanguagesDisplay />
            

        </div>
    );
  }
}
