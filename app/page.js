"use client";
import { useState, useEffect } from "react";
import WeatherApi from "./Component/WeatherApi";

export default function Home() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "998e9e09cdd7d511f02029f6558ba6d5";

  const search = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setError("");

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        setError(" Please enter a valid city name.");
        setData(null);
        return;
      }

      setData(data);
    } catch (err) {
      setError(" Error fetching weather data.");
    }
  };

 
  useEffect(() => {
    if (city.trim()) {
      search();
    }

  }, [city]); 
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <WeatherApi setCity={setCity} city={city} data={data} error={error} search={search} />
    </div>
  );
}
