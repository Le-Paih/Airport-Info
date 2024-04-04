import { useState } from "react";
import Map from "../components/Map";
import SelectedAirport from "../components/SelectedAirport";
import AirportList from "../components/AirportList";
import MapSelected from "../components/MapSelected";
import SearchBar from "../components/SearchBar";
import { useAirportData } from "../hooks/useAirportData";

function Interactive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const { airportData, isLoading } = useAirportData(searchQuery);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleSelectAirport(id) {
    setSelectedId(id);

    const airport = airportData.find((airport) => airport.airportId === id);
    setSelectedAirport(airport);
  }

  function handleCloseAirport() {
    setSelectedId(null);
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="mx-2 mb-6 grid h-[28rem] md:mx-10 md:grid-cols-2">
        {selectedId ? (
          <SelectedAirport
            airport={selectedAirport}
            onCloseAirport={handleCloseAirport}
          />
        ) : (
          <AirportList
            airportData={airportData}
            isLoading={isLoading}
            onSelectAirport={handleSelectAirport}
          />
        )}
        {selectedAirport && <MapSelected airport={selectedAirport} />}
        {!selectedAirport && <Map />}
      </div>
    </div>
  );
}

export default Interactive;
