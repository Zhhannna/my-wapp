// src/components/CityList.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import { fetchWeather } from "../api/weatherApi";

function CityList({ cities }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const favorites = useSelector((state) => state.temperature.favorites);

  useEffect(() => {
    async function loadWeather() {
      const results = [];

      for (const city of cities) {
        try {
          const data = await fetchWeather(city.city);
          results.push({
            id: city.id,
            city: city.city,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          });
        } catch (err) {
          console.error("Error loading weather for", city.city, err);
        }
      }

      setWeatherList(results);
    }

    loadWeather();
  }, [cities]);

  const filteredCities = weatherList
    .filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      if (aFav === bFav) return a.city.localeCompare(b.city);
      return aFav ? -1 : 1;
    });

  return (
    <div className="city-list-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="city-list">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No cities found
          </p>
        )}
      </div>
    </div>
  );
}

export default CityList;
