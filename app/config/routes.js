import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import MainContainer from "../containers/MainContainer";
import HomeContainer from "../containers/HomeContainer";
import ForecastContainer from "../containers/ForecastContainer";
import ForecastDetailContainer from "../containers/ForecastDetailContainer";

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="forecast/:city" component={ForecastContainer} />
        <Route path="details/:city" component={ForecastDetailContainer} />
      </Route>
    </Router>
  );
};


export default Routes;
