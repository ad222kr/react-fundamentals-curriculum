import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import ActionTypes from "../constants/ActionTypes";

const CHANGE_EVENT = "change";

class ForecastStore extends EventEmitter {
  constructor() {
    super();
    this.forecasts = [];
  }
  emitChange() {
    console.log("CHANGE_EVENT");
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  exists(city) {
    const exists = this.forecasts.filter(forecast => {
      return city === forecast.city.name;
    }).length !== 0;
    return exists;
  }

  get(city) {
    console.log(this.forecasts);
    return this.forecasts.filter(forecast => {
      return city === forecast.city.name;
    })[0];
  }

  handleActions(action) {
    switch(action.type) {
      case ActionTypes.REQUEST_FORECAST_SUCCESS:

        if (this.exists(action.response.data.city.name)) {
          this.emitChange();
          break;
        }
        const { data } = action.response;

        this.forecasts.push(data);
        this.emitChange();
        break;
      case ActionTypes.REQUEST_FORECAST:
        console.log("Started request to openweathermap api..");
        break;
      case ActionTypes.REQUEST_FORECST_ERROR:
        console.log("Error on request to openweathermap api");
        console.log(action.error);
        break
    }
  }
}

const store = new ForecastStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
