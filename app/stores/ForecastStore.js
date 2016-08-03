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
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  handleActions(action) {
    switch(action.type) {
      case ActionTypes.REQUEST_FORECAST_SUCCESS:
        this.emitChange();
        console.log("Request done");
        console.log(action.response.data);
        break;
      case ActionTypes.REQUEST_FORECAST:
        console.log("Started request to openweathermap api..");
        break;
      case ActionTypes.REQUEST_FORECST_ERROR:
        console.log("Error on request to openweathermap api");
        break
    }
  }
}

const store = new ForecastStore();
dispatcher.register(store.handleActions.bind(store));

export default store;
