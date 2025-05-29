import './scss/style.scss';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconUrl from './assets/images/icon-location.svg'

const mapContainer = document.getElementById('map') as HTMLDivElement;

if(mapContainer) {
  const rootStyles = getComputedStyle(document.documentElement);
  const mapCircle = rootStyles.getPropertyValue('--clr-map-circle').trim();
  const mapFill = rootStyles.getPropertyValue('--clr-map-fill').trim();
  
  const customIcon = L.icon({
    iconUrl: customIconUrl,
    iconSize: [66, 88],
    iconAnchor: [33, 88],
    popupAnchor: [0, -72],
  });
  
  const map = L.map('map').setView([41.482144, -71.310514], 16);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  L.marker([41.482144, -71.310514], {
      icon: customIcon, 
      alt: 'Modern Art Gallery, 99 King Street, Newport, RI 02840, USA' })
    .addTo(map)
    .bindPopup('<b>Modern Art Gallery</b><br>99 King Street<br>Newport<br>RI 02840<br>USA')
    .openPopup();
    
  L.circle([41.482144, -71.310514], {
    radius: 300,
    color: mapCircle,
    fillColor: mapFill,
    fillOpacity: 1,
    interactive: false,
  }).addTo(map);
  
  map.zoomControl.remove();
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);
}
