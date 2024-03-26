function Results({ airportData, onSelectAirport }) {
  return (
    <ul
      className="dark:bg-overlay mx-14 h-auto max-h-96 overflow-scroll overflow-y-auto overflow-x-hidden rounded-md shadow-md transition duration-300 dark:shadow-none"
      style={{ scrollbarWidth: "none" }}
    >
      {airportData.map((airport) => (
        <li
          key={airport.airportId}
          className="my-1 ml-5 cursor-pointer text-left dark:text-white"
          onClick={() => onSelectAirport(airport.airportId)}
        >
          {airport.nameAirport} - {airport.codeIataAirport}
        </li>
      ))}
    </ul>
  );
}

export default Results;
