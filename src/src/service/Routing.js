import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomeContainer from "../component/Home/HomeContainer";
import NotFoundComponent from "../component/Error/NotFoundComponent";
import ParametroAplicacionContainer from "../component/Article/ArticleContainer";
import Navbar from "../component/Navbar/Navbar";
import InternalServerComponent from "../component/Error/InternalServerComponent";

const Routing = () => (
  <BrowserRouter>
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ height: "64px" }} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/article" component={ParametroAplicacionContainer} />
        <Route exact path="/500" component={InternalServerComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routing;
