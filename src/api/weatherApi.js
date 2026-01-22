// src/api/weatherApi.js
import axios from "axios";

const API_KEY = "f55800010f1e6417f078a65a526f9076";

export async function fetchWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchForecast(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}
