import React, { useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import weatherData from "../data/weatherData";

import sunny from "../icons/sunny.svg";
import cloudy from "../icons/cloudy.svg";
import rain from "../icons/rain.svg";
import partlyCloudy from "../icons/partly-cloudy.svg";
import snow from "../icons/snow.svg";
import drizzle from "../icons/drizzle.svg";
import thunderstorm from "../icons/thunderstorm.svg";
import fog from "../icons/fog.svg";

const CONDITION_ICONS = {
  Sunny: sunny,
  Cloudy: cloudy,
  "Partly Cloudy": partlyCloudy,
  Snowy: snow,
  Drizzle: drizzle,
  Thunderstorm: thunderstorm,
  Fog: fog,
  Rain: rain
};

const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FORECAST":
      return { ...state, isForecastVisible: !state.isForecastVisible };
    default:
      return state;
  }
};

function convertTemp(temp, unit) {
  if (unit === "C") return temp;
  if (unit === "F") return Math.round((temp * 9) / 5 + 32);
  if (unit === "K") return Math.round(temp + 273.15);
  return temp;
}

function CityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = useSelector((state) => state.temperature.unit);

  const city = weatherData.find((c) => c.id === Number(id));

  const [state, dispatch] = useReducer(visibilityReducer, {
    isForecastVisible: true
  });

  if (!city) return <h2>City not found</h2>;

  return (
    <div className="city-details">
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to List
      </button>

      <div className="main-weather">
        <h2 className="city-name">{city.city}</h2>
        <img
          src={CONDITION_ICONS[city.condition]}
          alt={city.condition}
          className="condition-icon-large"
        />
        <div className="temperature-large">
          {convertTemp(city.temperature, unit)}°{unit}
        </div>
        <div className="condition-text">{city.condition}</div>
      </div>

      <div className="weather-info">
        <div>Wind: {city.windSpeed} {city.windDirection}</div>
        <div>Clouds: {city.clouds}</div>
        <div>
          Precipitation: {city.precipitation.chance}, {city.precipitation.type}, {city.precipitation.amount}
        </div>
      </div>

      {city.forecast.length > 0 && (
        <button
          className="back-btn"
          style={{ marginTop: "20px", fontSize: "0.9rem" }}
          onClick={() => dispatch({ type: "TOGGLE_FORECAST" })}
        >
          {state.isForecastVisible ? "Hide 5-Day Forecast" : "Show 5-Day Forecast"}
        </button>
      )}

      {state.isForecastVisible && city.forecast.length > 0 && (
        <>
          <h3>5-day Forecast:</h3>
          <div className="forecast-list">
            {city.forecast.map((day, index) => (
              <div className="forecast-item" key={index}>
                <div className="forecast-day">{day.day}</div>
                <img
                  src={CONDITION_ICONS[day.condition]}
                  alt={day.condition}
                  className="forecast-icon"
                />
                <div className="forecast-temp">
                  {convertTemp(day.temp, unit)}°{unit}
                </div>
                <div className="forecast-condition">{day.condition}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CityDetails;
