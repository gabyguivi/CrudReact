import React from "react";

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage? {this.props.garage}</h1>
        <Car color={this.props.color} />
      </div>
    );
  }
}

export { Car, Garage };
