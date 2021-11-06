import React, { useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function Map() {
  const [location, setLocation] = useState({latitude: 32.65475344800412, longitude: -115.40845535988518});

  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmV0by1jcHUiLCJhIjoiY2t2bm9lNnpkM3IwNjJ1cWlmOGUyYjRsZyJ9.JJU46nlmmM6L5dk6ARnX2g`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
    </MapContainer>
  );
}