import React from 'react';
import { MapContainer,TileLayer,Marker } from 'react-leaflet';
import './Map.css'
import "leaflet/dist/leaflet.css";
function Map(){
  return (
    <MapContainer className='map' center={[9.2219739, 123.5347378]} zoom={11} scrollWheelZoom={false} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[9.2133, 123.5157]}>
      
    </Marker>
    </MapContainer>

  )
}

export default Map
