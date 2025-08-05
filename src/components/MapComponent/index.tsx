import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { type LatLngTuple } from 'leaflet';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  position: LatLngTuple;
}

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const MapComponent = ({ position }: MapComponentProps) => (
  <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: '500px', width: '100%' }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        Stolen coordinates: <br />
        Lat: {position[0]} <br />
        Lng: {position[1]}
      </Popup>
    </Marker>
  </MapContainer>
);
