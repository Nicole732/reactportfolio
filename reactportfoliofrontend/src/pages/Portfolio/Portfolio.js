import React, { Component} from "react";
import LanguagesDisplay from "../../components/LanguagesDisplay";
import ImageCard from "../../components/ImageCard"

class Portfolio extends Component {
  state = {
    languages: [
      { name: "Html", proficiency: "Advanced" },
      { name: "CSS", proficiency: "Advanced" },
      { name: "Javascript", proficiency: "Advanced" },
      { name: "React", proficiency: "Advanced" },
    ],
    otherState: 'other languages'
  }
  switchLanguagesNames = () => {
      console.log("This was clicked");
      this.setState({ 
        languages: [
        { name: "Html 5", proficiency: "Intermediate"},
        { name: "CSS", proficiency: "Advanced" },
      { name: "Javascript", proficiency: "Advanced" },
      { name: "React", proficiency: "Intermediate" }
  
      ]
    })
    }
  render() {
    return (
      <div>
        <h1>Languages and Technologies Proficiency</h1>
        <button onClick = {this.switchLanguagesNames}> View </button>
        <LanguagesDisplay
          name={this.state.languages[0].name}
          proficiency={this.state.languages[0].proficiency}
        />
        <ImageCard name={this.state.languages[0].name} />
        
        <LanguagesDisplay
          name={this.state.languages[1].name}
          proficiency={this.state.languages[1].proficiency}
        />
      </div>
    );
  }
}
export default Portfolio;
