import { Spinner } from "@material-tailwind/react";
import Results from "../ui/Results";

function AirportList({ airportData, isLoading, onSelectAirport }) {
  if (!airportData.length && !isLoading) {
    return <p></p>;
  }

  return (
    <div className=" mb-5 mt-10 w-full flex-col ">
      <div>
        {isLoading && airportData.length > 0 ? (
          <Spinner className="ml-10 mt-5 h-12 w-12 text-blue-600/50" />
        ) : (
          <Results
            airportData={airportData}
            onSelectAirport={onSelectAirport}
          />
        )}
      </div>
    </div>
  );
}
export default AirportList;
