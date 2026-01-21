// src/components/CityList.js
import React from "react";
import CityCard from "./CityCard";

function CityList({ cities, onSelectCity }) {
  return (
    <div className="city-list">
      {cities.map(city => (
        <CityCard key={city.id} city={city} onClick={onSelectCity} />
      ))}
    </div>
  );
}

export default CityList;
