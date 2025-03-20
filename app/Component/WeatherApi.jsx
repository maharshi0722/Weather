import React from "react";

const WeatherApi = ({ data, search, setCity, city, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    search(); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg mx-auto text-center py-10 bg-white shadow-lg rounded-lg p-6 space-y-4 border">
        <img
          src="https://cdn.pixabay.com/photo/2022/04/27/01/12/weather-7159428_640.png"
          className="w-16 h-16 mx-auto"
          alt="Weather Icon"
        />
        <h1 className="text-2xl font-semibold">Weather App</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            className="text-center border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>

        {error && <p className="text-red-500 font-semibold">{error}</p>}

        {data && (
          <div className="mt-4 bg-gray-100 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <p className="text-gray-700 capitalize">{data.weather[0].description}</p>
            <p className="text-lg">🌡️ {Math.round(data.main.temp)}°C</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApi;
