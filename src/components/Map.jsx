import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function Map() {
  const { darkMode } = useContext(DarkModeContext);

  const tileLayerUrl = darkMode
    ? "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const customIcon = L.icon({
    iconUrl: "/airport-icon2.png",
    iconSize: [38, 38],
    iconAnchor: [16, 32],
  });

  return (
    <div className=" z-10 mb-5 mt-10 w-full rounded-md px-14 pb-1">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className=" dark:invert(100%) h-96 w-full rounded-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileLayerUrl}
        />
        <Marker position={[51.505, -0.09]} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
