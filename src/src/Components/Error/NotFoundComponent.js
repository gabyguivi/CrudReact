import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class NotFoundComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90%",
          flexDirection: "column"
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          Esta página no existe
        </Typography>
      </div>
    );
  }
}

export default NotFoundComponent;
