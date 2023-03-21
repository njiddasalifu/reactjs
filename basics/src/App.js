import React from "react";
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: ["Ford", "benz"],
        model: "Mustang",
        color: "red",
        year: 2000};
    }
    render(){
      return(
      <div>
        <h1>My Car is a {this.states.brand[1]}</h1>
        <p>
          It has a {this.state.color}
          and is a {this.state.model} model 
          made in {this.state.year}.
        </p>
      </div>
      );
    }
}

export default Car;