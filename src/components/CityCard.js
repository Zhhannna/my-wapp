// src/components/CityCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/temperatureSlice";

function convertTemp(temp, unit) {
  if (unit === "C") return Math.round(temp);
  if (unit === "F") return Math.round((temp * 9) / 5 + 32);
  if (unit === "K") return Math.round(temp + 273.15);
  return temp;
}

function CityCard({ city }) {
  const unit = useSelector((state) => state.temperature.unit);
  const favorites = useSelector((state) => state.temperature.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(city.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(city.id));
  };

  return (
    <Link
      to={`/city/${city.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="city-card">
<button
  className="favorite-btn"
  onClick={handleFavoriteClick}
>
  {isFavorite ? "★" : "☆"}
</button>


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
