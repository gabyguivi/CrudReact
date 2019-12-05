import React, { Component } from "react";
import HomeGridComponent from "./HomeGridComponent";

class HomeContainer extends Component {
  state = {
    value: "Home"
  };

  render() {
    return (
      <div style={styles.container}>
        <HomeGridComponent />
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "150px"
  }
};

export default HomeContainer;
