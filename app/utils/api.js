import axios from "axios";

const API_KEY = "602ff7d35fdcba62974520adcabea148";
const BASE_URL = "http://api.openweathermap.org/data/2.5/";

export function getCurrentWeather(city) {
  const url = `${BASE_URL}weather?q=${city}&type=accurate&APPID=${API_KEY}&units=metric`;
  return axios.get(url);
}

export function getFiveDayForecast(city) {
  const url = `${BASE_URL}forecast/daily?q=${city}&type=accurate&APPID=${API_KEY}&units=metric&cnt=5`;
  return axios.get(url);
}
