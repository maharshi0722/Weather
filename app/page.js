"use client";
import { useState } from "react";
import WeatherApi from "./Component/WeatherApi";

export default function Home() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const Apikey = "998e9e09cdd7d511f02029f6558ba6d5";
  const search = async () => {
   
    setError("");
    {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        setError("Please enter a valid city name.");
        setData(null);
        setCity("")
        return;
      }
      setData(data);
      setCity("");
    }
  };

  return (
    <div className="bg-blue-500 h-screen pt-5">
      <WeatherApi
        search={search}
        setCity={setCity}
        city={city}
        data={data}
        error={error}
      />
    </div>
  );
}
