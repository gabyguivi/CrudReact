import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const HomeGridComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <Link to="/article" style={styles.link}>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h5" gutterBottom>
                <i className="material-icons" style={styles.icon}>
                  shopping_cart
                </i>
                Artículos
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1.7),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#ffe6e6"
    }
  }
}));

const styles = {
  icon: {
    fontSize: "20px",
    marginRight: "10px"
  },
  link: {
    textDecoration: "none"
  }
};

export default HomeGridComponent;
