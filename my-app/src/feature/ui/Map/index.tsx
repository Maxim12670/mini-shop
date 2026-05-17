import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const TOMSK_CENTER: [number, number] = [56.4847, 84.9483];
const TSU_MAIN_BUILDING: [number, number] = [56.4694, 84.9475];
const TSU_LIBRARY: [number, number] = [56.4666, 84.9477];

function Map() {
  return (
    <div style={{ height: "354px", width: "100%" }}>
      <MapContainer
        center={TOMSK_CENTER}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={TSU_MAIN_BUILDING}>
          <Popup>Главный корпус ТГУ</Popup>
        </Marker>
        <Marker position={TSU_LIBRARY}>
          <Popup>Научная библиотека ТГУ</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
