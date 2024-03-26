import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function AirportInfo({ airport, onCloseAirport }) {
  const [weather, setWeather] = useState(null);

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${airport.latitudeAirport}&lon=${airport.longitudeAirport}&appid=a3f658d2e7f50e7aaba31456bf75cb34&units=metric`,
          );
          setWeather(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }

      if (airport) {
        fetchWeather();
      }
    },
    [airport],
  );

  return (
    <div className="mb-5 mt-10 flex w-full flex-col">
      <div className="dark:bg-overlay mx-12 h-96 overflow-scroll overflow-y-auto overflow-x-hidden rounded-md p-2 shadow-md transition duration-300 sm:px-3 md:mx-6 md:p-4 lg:mx-12 dark:text-white dark:shadow-none">
        <button
          className="dark:hover:text-dPurple flex flex-row transition duration-200  hover:text-blue-600"
          onClick={onCloseAirport}
        >
          <ArrowUturnLeftIcon className="my-auto h-4 w-4" />{" "}
          <span className="ml-2">Back to results</span>
        </button>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{airport.nameAirport}</h1>
          <h2 className="text-xl font-medium">{airport.codeIataAirport}</h2>
          <h3 className="text-xl font-medium">{airport.nameCountry}</h3>
          <h3 className="text-lg font-medium">GMT: {airport.GMT}</h3>
        </div>

        {weather && (
          <div className="mt-8 grid h-10 grid-cols-1">
            <div className="grid grid-cols-2">
              <div className=" grid grid-cols-2">
                <div className="m-auto ">
                  <h1 className="text-3xl font-semibold">
                    {Math.round(weather.main.temp)}°C
                  </h1>
                  <h2 className="text-md font-medium">
                    {weather.weather[0].main}
                  </h2>
                  <h3 className="text-sm">{weather.weather[0].description}</h3>
                </div>
                <img
                  alt="weather"
                  className="h-22 w-22"
                  src={`/icons/${weather.weather[0].icon}.png`}
                />
              </div>

              <div className="ml-4 mt-4 flex flex-col pr-5">
                <p className="mt-[3px] flex text-sm">
                  Feels like{" "}
                  <span className="ml-auto font-semibold">
                    {Math.round(weather.main.feels_like)}°C
                  </span>
                </p>
                <p className="mt-[3px] flex text-sm">
                  Wind{" "}
                  <span className="ml-auto font-semibold">
                    {weather.wind.speed} m/s
                  </span>
                </p>
                <p className="mt-[3px] flex text-sm">
                  Humidity{" "}
                  <span className="ml-auto font-semibold">
                    {weather.main.humidity}%
                  </span>
                </p>
                <p className="mt-[3px] flex text-sm">
                  Pressure{" "}
                  <span className="ml-auto font-semibold">
                    {weather.main.pressure} hPa
                  </span>
                </p>
              </div>
            </div>
            <div className="w-100%">
              <h2 className="text-center text-xl font-medium">
                {weather.name}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AirportInfo;
