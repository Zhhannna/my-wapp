// src/components/Favorites.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../api/weatherApi";
import weatherData from "../data/weatherData";

function Favorites() {
  const favorites = useSelector((state) => state.temperature.favorites);
  const [favoriteWeather, setFavoriteWeather] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFavorites() {
      const results = [];

      for (const id of favorites) {
        const cityMeta = weatherData.find((c) => c.id === id);
        if (!cityMeta) continue;

        try {
          const data = await fetchWeather(cityMeta.city);
          results.push({
            id: cityMeta.id,
            city: cityMeta.city,
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          });
        } catch (err) {
          console.error("Error loading favorite weather:", err);
        }
      }

      setFavoriteWeather(results);
    }

    loadFavorites();
  }, [favorites]);

  return (
    <div className="favorites-page">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to All Cities
      </button>

      <h2 className="favorites-title">Your Favorite Cities</h2>

      {favoriteWeather.length === 0 ? (
        <p className="favorites-empty">You have no favorite cities yet.</p>
      ) : (
        <div className="favorites-grid">
          {favoriteWeather.map((city) => (
            <div key={city.id} className="favorite-card">
              <h3>{city.city}</h3>

              <img src={city.icon} alt={city.condition} />

              <div className="favorite-temp">{city.temp}°C</div>
              <div className="favorite-condition">{city.condition}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
