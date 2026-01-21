const weatherData = [
  {
    id: 1,
    city: "Warsaw",
    temperature: 10,
    condition: "Cloudy",
    windSpeed: "15 km/h",
    windDirection: "NW",
    clouds: "80%",
    precipitation: {
      chance: "20%",
      type: "Rain",
      amount: "2 mm"
    },
    forecast: [
      { day: "Mon", temp: 11, condition: "Rain" },
      { day: "Tue", temp: 9, condition: "Cloudy" },
      { day: "Wed", temp: 12, condition: "Sunny" },
      { day: "Thu", temp: 10, condition: "Rain" },
      { day: "Fri", temp: 13, condition: "Sunny" }
    ]
  },
  {
    id: 2,
    city: "London",
    temperature: -2,
    condition: "Snow",
    windSpeed: "20 km/h",
    windDirection: "SW",
    clouds: "90%",
    precipitation: {
      chance: "60%",
      type: "Snowy",
      amount: "4 mm"
    },
    forecast: [
      { day: "Mon", temp: 0, condition: "Cloudy" },
      { day: "Tue", temp: 1, condition: "Rain" },
      { day: "Wed", temp: 4, condition: "Sunny" },
      { day: "Thu", temp: 2, condition: "Rain" },
      { day: "Fri", temp: 5, condition: "Sunny" }
    ]
  },
  {
    id: 3,
    city: "Paris",
    temperature: 18,
    condition: "Sunny",
    windSpeed: "10 km/h",
    windDirection: "E",
    clouds: "10%",
    precipitation: {
      chance: "0%",
      type: "None",
      amount: "0 mm"
    },
    forecast: [
      { day: "Mon", temp: 19, condition: "Sunny" },
      { day: "Tue", temp: 17, condition: "Cloudy" },
      { day: "Wed", temp: 18, condition: "Sunny" },
      { day: "Thu", temp: 16, condition: "Sunny" },
      { day: "Fri", temp: 20, condition: "Sunny" }
    ]
  },
  {
    id: 4,
    city: "Sydney",
    temperature: 25,
    condition: "Partly Cloudy",
    windSpeed: "15 km/h",
    windDirection: "SE",
    clouds: "40%",
    precipitation: {
      chance: "10%",
      type: "Drizzle",
      amount: "1 mm"
    },
    forecast: [
      { day: "Mon", temp: 26, condition: "Sunny" },
      { day: "Tue", temp: 24, condition: "Cloudy" },
      { day: "Wed", temp: 25, condition: "Sunny" },
      { day: "Thu", temp: 23, condition: "Rain" },
      { day: "Fri", temp: 27, condition: "Sunny" }
    ]
  },
  {
    id: 5,
    city: "New York",
    temperature: 8,
    condition: "Fog",
    windSpeed: "12 km/h",
    windDirection: "N",
    clouds: "100%",
    precipitation: {
      chance: "30%",
      type: "Mist",
      amount: "0.5 mm"
    },
    forecast: [
      { day: "Mon", temp: 9, condition: "Fog" },
      { day: "Tue", temp: 7, condition: "Cloudy" },
      { day: "Wed", temp: 8, condition: "Rain" },
      { day: "Thu", temp: 6, condition: "Fog" },
      { day: "Fri", temp: 10, condition: "Sunny" }
    ]
  },
  {
    id: 6,
    city: "Toronto",
    temperature: 14,
    condition: "Sunny",
    windSpeed: "12 km/h",
    windDirection: "NE",
    clouds: "20%",
    precipitation: {
      chance: "0%",
      type: "None",
      amount: "0 mm"
    },
    forecast: [
      { day: "Mon", temp: 15, condition: "Sunny" },
      { day: "Tue", temp: 13, condition: "Cloudy" },
      { day: "Wed", temp: 14, condition: "Sunny" },
      { day: "Thu", temp: 12, condition: "Cloudy" },
      { day: "Fri", temp: 16, condition: "Sunny" }
    ]
  }
];

export default weatherData;