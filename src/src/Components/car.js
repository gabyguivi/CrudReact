import React from "react";

class Car extends React.Component {
  state = {
    brand: { name: "Renault", model: "Sandero" },
    color: this.props.favcol,
    year: 2017
  };
  componentDidMount() {
    console.log(this.props);
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  changeColor = () => {
    if (this.state.color === "red" || this.state.color === "Fire red")
      this.setState({ color: "blue" });
    else this.setState({ color: "red" });
  };
  render() {
    return (
      <div>
        <div>
          <input onChange={this.handleChange}></input>
        </div>
        <h1>My {this.state.brand.name}</h1>
        <p>
          It is a {this.state.color}&nbsp;
          {this.state.brand.model}&nbsp;from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export { Car };
