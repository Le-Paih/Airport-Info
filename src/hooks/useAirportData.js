import { useEffect, useState } from "react";
import { API_KEY_AIR } from "../utils/key";

export function useAirportData(searchQuery) {
  const [airportData, setAirportData] = useState([]);
  const [filteredAirportData, setFilteredAirportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAirportData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://aviation-edge.com/v2/public/airportDatabase?key=${API_KEY_AIR}`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setAirportData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchQuery.length >= 3) {
      fetchAirportData();
    } else {
      setAirportData([]);
    }

    return function () {
      controller.abort();
    };
  }, [searchQuery]);

  useEffect(() => {
    if (!isLoading && searchQuery.length >= 3) {
      const filtered = airportData.filter((airport) => {
        const name = airport.nameAirport
          ? airport.nameAirport.toLowerCase()
          : "";
        const code = airport.codeIataAirport
          ? airport.codeIataAirport.toLowerCase()
          : "";
        const country = airport.nameCountry
          ? airport.nameCountry.toLowerCase()
          : "";
        const query = searchQuery.toLowerCase();
        return (
          name.includes(query) ||
          code.includes(query) ||
          country.includes(query)
        );
      });
      setFilteredAirportData(filtered);
    } else {
      setFilteredAirportData([]);
    }
  }, [searchQuery, airportData, isLoading]);

  return { airportData: filteredAirportData, isLoading };
}
