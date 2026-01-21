// src/components/CityCard.js
import React from "react";
import sunnyIcon from "../icons/sunny.svg";
import cloudyIcon from "../icons/cloudy.svg";
import partlyCloudyIcon from "../icons/partly-cloudy.svg";
import fogIcon from "../icons/fog.svg";
import snowIcon from "../icons/snow.svg";
import drizzleIcon from "../icons/drizzle.svg";
import thunderstormIcon from "../icons/thunderstorm.svg";
import rainIcon from "../icons/rain.svg";

function CityCard({ city, onClick }) {
  const conditionIcons = {
    Sunny: sunnyIcon,
    Cloudy: cloudyIcon,
    "Partly Cloudy": partlyCloudyIcon,
    Fog: fogIcon,
    Snow: snowIcon,
    Drizzle: drizzleIcon,
    Thunderstorm: thunderstormIcon,
    Rain: rainIcon,
  };

  return (
    <div className="city-card" onClick={() => onClick(city)}>
      <h3 className="city-name">{city.city}</h3>
      <img
        src={conditionIcons[city.condition]}
        alt={city.condition}
        className="condition-icon"
      />
      <div className="temperature">{city.temperature}°C</div>
      <p className="condition-text">{city.condition}</p>
    </div>
  );
}

export default CityCard;
