import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <p>Loading...</p>;

  return (
    <div className="bg-[#101744] p-4 rounded-2xl">
      <div className="flex justify-between">
        <p>{new Date().toLocaleDateString()}</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>

      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold">
          {weather.main.temp}°C
        </h1>
        <p>{weather.weather[0].main}</p>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <p>Humidity: {weather.main.humidity}</p>
        <p>Wind: {weather.wind.speed}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;