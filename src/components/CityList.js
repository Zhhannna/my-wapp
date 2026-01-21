import CityCard from "./CityCard";

function CityList({ cities, onSelectCity }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cities.map((city) => (
        <CityCard key={city.id} city={city} onClick={onSelectCity} />
      ))}
    </div>
  );
}

export default CityList;
