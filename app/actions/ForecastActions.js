import ForecastStore from "../stores/ForecastStore";
import * as WeatherAPI from "../utils/api";
import ActionTypes from "../constants/ActionTypes";
import dispatcher from "../dispatcher";

export function requestForecast(city) {
  dispatcher.dispatch({ type: ActionTypes.REQUEST_FORECAST });
  WeatherAPI
    .getFiveDayForecast(city)
    .then(response => {
      dispatcher.dispatch({
        type: ActionTypes.REQUEST_FORECAST_SUCCESS,
        response,
      });
    })
    .catch(error => {
      dispatcher.dispatch({
        type: ActionTypes.REQUEST_FORECST_ERROR,
        error,
      });
    });
}
