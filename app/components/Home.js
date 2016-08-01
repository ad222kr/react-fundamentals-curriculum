import React, { PropTypes } from "react";

import GetForecastsContainer from "../containers/GetForecastsContainer";
import home from "../styles/home.css";


const Home = () => {
  return (
    <div class="home row">
      <div class="col-md-4 col-md-offset-4" style={{ textAlign: "center" }}>
        <h1>Get forecasts!</h1>
        <GetForecastsContainer />
      </div>
    </div>
  );
};

export default Home;
