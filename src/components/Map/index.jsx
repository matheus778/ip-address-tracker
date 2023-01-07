import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import './style.css';
import { MapContainer, Marker, TileLayer, Popup, useMap} from 'react-leaflet';

function Map() {
  const [position, setPosition ] = useState([51.505,-0.09]);

  useEffect(() => {
    const map = L.map('map').setView(position, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    L.marker(position).addTo(map)

    return () => {
      map.remove();
    }
  },[])

  return (
   <div id="map">
  
   </div>
    
  )
}

export {Map};