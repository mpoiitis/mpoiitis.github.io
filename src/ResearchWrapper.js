import React from "react";
import Aggression from "blogPosts/Aggression.js";
import Triage from "blogPosts/Triage.js";

class ResearchWrapper extends React.Component {

  render(){

    const component = this.props.match.params.work;
    if(component === "aggression"){
      return <Aggression />
    }
    else {
      return <Triage />
    }
    
  }
}

export default ResearchWrapper;