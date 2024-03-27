import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function MapSelected({ airport }) {
  const { darkMode } = useContext(DarkModeContext);
  const [map, setMap] = useState(null);

  useEffect(
    function () {
      if (map && airport) {
        map.setView(
          new map[(airport.latitudeAirport, airport.longitudeAirport)](),
          12,
        );
      }
    },
    [airport, map],
  );

  const customIcon = L.icon({
    iconUrl: "/airport-icon2.png",
    iconSize: [38, 38],
    iconAnchor: [16, 32],
  });

  const tileLayerUrl = darkMode
    ? "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className=" z-10 mb-5 mt-10 w-full rounded-md px-12 pb-1 md:px-6 lg:px-12">
      <MapContainer
        center={[airport?.latitudeAirport || 0, airport?.longitudeAirport || 0]}
        zoom={12}
        scrollWheelZoom={true}
        className=" dark:invert(100%) h-96 w-full rounded-md"
        whenCreated={(map) => {
          setMap(map);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileLayerUrl}
        />
        {airport && (
          <Marker
            position={[airport.latitudeAirport, airport.longitudeAirport]}
            icon={customIcon}
          >
            <Popup>
              {airport.nameAirport} - {airport.codeIataAirport} <br></br>{" "}
              {airport.nameCountry}
            </Popup>
            <RecenterAutomatically
              lat={airport.latitudeAirport}
              lng={airport.longitudeAirport}
            />
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

export default MapSelected;
