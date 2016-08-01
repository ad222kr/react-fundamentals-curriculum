import React, { PropTypes } from "react";
import Loading from "./Loading";
import { getFormattedDate } from "../utils/helpers";


const ForecastList = ({ isLoading, forecasts, city, onClick }) => {
  if (isLoading) return (<p>Loading</p>);

  return (
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h3>Forecasts for {city}</h3>

        {forecasts.map(forecast => {
          console.log(forecast);
          return (
            <ForecastListItem
              forecast={forecast}
              key={Math.random()}
              onClick={onClick.bind(null, forecast)}
            />
          )
        })}
      </div>
    </div>
  );
};

const ICON_URL = "http://openweathermap.org/img/w/";

const ForecastListItem = ({ forecast, onClick }) => {
  return (
    <a class="forecast-list-item" onClick={onClick}>
      <img src={`${ICON_URL}${forecast.weather[0].icon}.png`} alt="weather icon" />
      <p>{getFormattedDate(forecast.dt)}</p>
    </a>
  );
};


ForecastList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecasts: PropTypes.array.isRequired,
  city: PropTypes.string,
};

export default ForecastList;
