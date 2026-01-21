// src/components/CityList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CityCard from "./CityCard";

function CityList({ cities }) {
  const [searchTerm, setSearchTerm] = useState("");
  const favorites = useSelector((state) => state.temperature.favorites);

  const filteredCities = cities
    .filter((city) =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      if (aFav === bFav) return a.city.localeCompare(b.city);
      return aFav ? -1 : 1; // favorites first
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
