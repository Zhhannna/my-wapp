// src/components/Favorites.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWeather } from "../api/weatherApi";
import weatherData from "../data/weatherData";

function Favorites() {
  const favorites = useSelector((state) => state.temperature.favorites);
  const [favoriteWeather, setFavoriteWeather] = useState([]);
  const [dbFavorites, setDbFavorites] = useState([]); // DB favorites
  const navigate = useNavigate();

  // --- Fetch favorites from db.json ---
  useEffect(() => {
    fetch("http://localhost:5000/favorites")
      .then((res) => res.json())
      .then((data) => setDbFavorites(data))
      .catch((err) => console.error("DB fetch error:", err));
  }, []);

  // --- Fetch weather for Redux favorites ---
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
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
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

      {/* DB favorites section */}
      <div className="db-section">
        <h3>Database Favorites (from db.json)</h3>
        <ul>
          {dbFavorites.map((item) => (
            <li key={item.id}>{item.city}</li>
          ))}
        </ul>
      </div>

      {/* Weather favorites UI */}
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
