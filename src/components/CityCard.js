import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function convertTemp(temp, unit) {
  if (unit === "C") return temp;
  if (unit === "F") return Math.round((temp * 9) / 5 + 32);
  if (unit === "K") return Math.round(temp + 273.15);
  return temp;
}

function CityCard({ city }) {
  const unit = useSelector((state) => state.temperature.unit);

  return (
    <Link to={`/city/${city.id}`} style={{ textDecoration: "none", color: "white" }}>
      <div className="city-card">
        <img src={city.icon} alt={city.condition} className="condition-icon" />
        <h3>{city.city}</h3>
        <div className="temperature">
          {convertTemp(city.temperature, unit)}°{unit}
        </div>
        <div className="condition-text">{city.condition}</div>
      </div>
    </Link>
  );
}

export default CityCard;
