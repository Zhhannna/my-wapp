// src/components/CityDetails.js
import React from "react";
import sunny from "../icons/sunny.svg";
import cloudy from "../icons/cloudy.svg";
import rain from "../icons/rain.svg";
import partlyCloudy from "../icons/partly-cloudy.svg";
import snow from "../icons/snow.svg";
import drizzle from "../icons/drizzle.svg";
import thunderstorm from "../icons/thunderstorm.svg";
import fog from "../icons/fog.svg";

function CityDetails({ city, onBack }) {
  if (!city) return null;

  const conditionIcons = {
    Sunny: sunny,
    Cloudy: cloudy,
    "Partly Cloudy": partlyCloudy,
    Snowy: snow,
    Drizzle: drizzle,
    Thunderstorm: thunderstorm,
    Fog: fog,
    Rain: rain
  };

  return (
    <div className="city-details">
      <button className="back-btn" onClick={onBack}>
        Back
      </button>

      <div className="main-weather">
        <h2 className="city-name">{city.city}</h2>
        <img
          src={conditionIcons[city.condition] || sunny}
          alt={city.condition}
          className="condition-icon-large"
        />
        <div className="temperature-large">{city.temperature}°C</div>
        <div className="condition-text">{city.condition}</div>
      </div>

      <div className="weather-info">
        <div>Wind: {city.windSpeed} {city.windDirection}</div>
        <div>Clouds: {city.clouds}</div>
        <div>
          Precipitation: {city.precipitation.chance}, {city.precipitation.type}, {city.precipitation.amount}
        </div>
      </div>

      {city.forecast && city.forecast.length > 0 && (
        <>
          <h3>5-day Forecast:</h3>
          <div className="forecast-list">
            {city.forecast.map((day, index) => (
              <div className="forecast-item" key={index}>
                <div className="forecast-day">{day.day}</div>
                <img
                  src={conditionIcons[day.condition] || sunny}
                  alt={day.condition}
                  className="forecast-icon"
                />
                <div className="forecast-temp">{day.temp}°C</div>
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
