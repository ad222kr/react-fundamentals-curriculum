import React from "react";
import ForecastDetail from "../components/ForecastDetail";


const ForecastDetailContainer = ({ location, routeParams }) => {
  const { forecast } = location.state;
  const { city } = routeParams;
  console.log("FORECAST DETAULS ");

  return (
    <ForecastDetail
      forecast={forecast}
      city={city}
    />
  );
};

export default ForecastDetailContainer;
