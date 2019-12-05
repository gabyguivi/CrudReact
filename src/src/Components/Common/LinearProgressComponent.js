import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const LinearProgressComponent = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <ColorLinearProgress className={classes.margin} />
    </div>
  );
};

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#c62828"
  },
  barColorPrimary: {
    backgroundColor: "#ffcdd2"
  }
})(LinearProgress);

const styles = makeStyles(() => ({
  margin: {
    marginTop: "-8px"
  }
}));

export default LinearProgressComponent;
