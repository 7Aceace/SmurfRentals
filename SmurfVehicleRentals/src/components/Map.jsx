import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import "leaflet/dist/leaflet.css";

function Map() {
  const positions = [
    { coords: [9.1811, 123.5414], iconUrl: require('../assets/MountainIcon.png'), popupImageUrl: require('../assets/Bandilaan.png'), title: 'Mt. Bandilaan', description: 'Mt. Bandilaan rewards hikers with panoramic views of Siquijors stunning landscape and a chance to explore its mystical caves and sacred sites, making it a must-visit for outdoor enthusiasts and spiritual seekers alike.' },
    { coords: [9.1591,123.4927], iconUrl: require('../assets/BeachIcon.png'), popupImageUrl: require('../assets/PalitonBeach.png'), title: 'Paliton Beach', description: 'Paliton Beach boasts pristine white sands and crystal-clear waters, inviting beachgoers to relax and unwind in a picturesque tropical paradise.' },
    { coords: [9.1400, 123.6267], iconUrl: require('../assets/WaterfallsIcon.png'), popupImageUrl: require('../assets/Cambugahay.png'), title: 'Cambugahay Falls', description: ' Cambugahay Falls entices visitors with its stunning turquoise cascades and natural swimming pools, providing a refreshing escape amidst lush tropical greenery.' },
    { coords: [9.1682846, 123.4820057], iconUrl: require('../assets//DrinksIcon.png'), popupImageUrl: require('../assets/JJBackpacker.png'), title: 'JJ Backpacker', description: 'JJ Backpackers offers budget-friendly accommodations with a laid-back atmosphere, perfect for travelers looking to immerse themselves in Siquijor charm.' },
    { coords: [9.2125,  123.6811], iconUrl: require('../assets/Tree Icon.png'), popupImageUrl: require('../assets/SalagdoongManMadeForest.png'), title: 'Salagdoong Man Made Forest', description: 'Salagdoong Manmade Forest showcases a serene landscape of towering trees, offering a tranquil retreat for nature lovers seeking solitude and peace.' },
    { coords: [9.2848652, 123.6416681], iconUrl: require('../assets//SnorkelIcon.png'), popupImageUrl: require('../assets/TulapoMarineSanctuary.png'), title: 'Tulapos Marine Sanctuary', description: 'Tulapos Marine Sanctuary is a haven for underwater enthusiasts, teeming with vibrant marine life and colorful coral reefs, ideal for snorkeling and diving adventures.' },
  ];

  return (
    <MapContainer className='map' center={[9.2219739, 123.5347378]} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((position, index) => {
        const customMarkerIcon = L.icon({
          iconUrl: position.iconUrl, // use iconUrl from position
          iconSize: [50, 50], // size of the icon
          iconAnchor: [30, 55], // point of the icon which will correspond to marker's location
          popupAnchor: [-1, -40] // point from which the popup should open relative to the iconAnchor
        });

        return (
          <Marker key={index} position={position.coords} icon={customMarkerIcon}>
           <Popup>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={position.popupImageUrl} alt={position.title} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
    <div>
      <h2 style={{ fontSize: '16px' }}>{position.title}</h2>
      <p style={{ fontSize: '12px' }}>{position.description}</p>
    </div>
  </div>
</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  )
}

export default Map;