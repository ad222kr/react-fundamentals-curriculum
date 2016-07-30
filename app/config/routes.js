import React from "react";
import ReactRouter, { Router, Route, hashHistory } from "react-router";

import MainContainer from "../containers/MainContainer";

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer} />
    </Router>
  );
};


export default Routes;
