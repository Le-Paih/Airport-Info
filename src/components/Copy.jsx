function AirportInfo({ airportData, isLoading }) {
  const [selectedAirport, setSelectedAirport] = useState(null);

  // Function to handle airport click
  const handleAirportClick = (airport) => {
    setSelectedAirport(airport);
  };

  return (
    <div className="mb-5 mt-10 w-full flex-col">
      <div>
        {isLoading ? ( // Show spinner if data is loading
          <Spinner className="ml-10 mt-5 h-12 w-12 text-blue-600/50" />
        ) : (
          <div>
            {selectedAirport ? (
              <AirportDetails airport={selectedAirport} />
            ) : (
              <ul
                className="dark:bg-overlay mx-14 h-auto max-h-96 overflow-scroll overflow-y-auto overflow-x-hidden rounded-md shadow-md transition duration-300 dark:shadow-none"
                style={{ scrollbarWidth: "none" }}
              >
                {airportData.map((airport) => (
                  <li
                    key={airport.code}
                    className="my-1 ml-5 cursor-pointer text-left dark:text-white"
                    onClick={() => handleAirportClick(airport)}
                  >
                    {airport.nameAirport} - {airport.codeIataAirport}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
