import React from "react";
import { getFormattedDate } from "../utils/helpers";

const ICON_URL = "http://openweathermap.org/img/w/";

const ForecastDetail = ({ forecast, city }) => {
  console.log(forecast);
  // Date, City, "clear sky", temp, humidity
  const { dt, humidity } = forecast;
  const { max, min } = forecast.temp;
  const { description, icon } = forecast.weather[0];
  return (
    <div class="col-md-4 col-md-offset-4">
      <h3>Details for {city}</h3>
      <p>{getFormattedDate(dt)}</p>
      <img src={`${ICON_URL}${forecast.weather[0].icon}.png`} alt="weather icon" />
      <p>Max temp: {max} </p>
      <p>Min temp: {min} </p>
      <p>{description} </p>
      <p>Humidity: {humidity} </p>
    </div>
  );
};

export default ForecastDetail;
