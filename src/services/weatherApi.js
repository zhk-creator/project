export const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );

  return res.json();
};