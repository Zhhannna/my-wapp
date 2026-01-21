function CityCard({ city, onClick }) {
  return (
    <div
      onClick={() => onClick(city)} 
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "200px"
      }}
    >
      <h3>{city.city}</h3>
      <p>Temperature: {city.temperature}°C</p>
      <p>Condition: {city.condition}</p>
    </div>
  );
}

export default CityCard;
