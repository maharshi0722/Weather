import React from "react";

const WeatherApi = ({ data, search, setCity, city ,error  }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto text-center py-10 text-black space-y-2 border-2 w-fit p-5  text-xl">
        <img
          src="https://cdn.pixabay.com/photo/2022/04/27/01/12/weather-7159428_640.png"
          className="w-12 h-12 rounded-sm mx-auto"
          alt=""
        />
        Weather App
        <div className="pt-2">
          <input
            type="text"
            placeholder="search weather"
            className="text-center "
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <button onClick={search}>Search</button>
        <div>
          {data && (
            <div>
              <h2>{data.name}</h2>
              <p>{data.weather[0].description}</p>
              <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
              <p>Humidity: {data.main.humidity}%</p>
            </div>
          )}
        </div>
        {error}
      </div>
    </div>
  );
};

export default WeatherApi;
