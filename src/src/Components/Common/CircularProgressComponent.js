import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const CircularProgressComponent = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.top} />
    </div>
  );
};

const styles = makeStyles({
  root: {
    display: "flex",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    color: "#c62828"
  }
});

export default CircularProgressComponent;
