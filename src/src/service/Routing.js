import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomeContainer from "../Components/Home/HomeContainer";
import NotFoundComponent from "../Components/Error/NotFoundComponent";
import Navbar from "../Components/Navbar/Navbar";
import InternalServerComponent from "../Components/Error/InternalServerComponent";
import ArticleGrid from "../Components/Article/ArticleGrid";

const Routing = () => (
  <BrowserRouter>
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ height: "64px" }} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/article" component={ArticleGrid} />
        <Route exact path="/500" component={InternalServerComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
