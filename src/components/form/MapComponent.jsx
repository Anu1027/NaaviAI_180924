import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import your custom marker image from the local path
import customMarkerIcon from '../../assets/images/icon/map.jpg';  // Adjust path based on your project structure
import markerShadow from 'leaflet/dist/images/marker-shadow.png'; // Keep the default shadow

const MapComponent = () => {
    useEffect(() => {
        // Check if the map is already initialized (to avoid reinitialization)
        if (!window.mapInstance) {
            // Initialize the map with T-Hub coordinates
            const map = L.map('map').setView([17.4474, 78.3762], 13);
            
            // Set up OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            
            // Set the marker icon to your custom image
            const customIcon = L.icon({
                iconUrl: customMarkerIcon,  // Use your custom marker image here
                shadowUrl: markerShadow,
                iconSize: [30, 45], // Adjust size of the icon as needed
                iconAnchor: [15, 45], // Adjust anchor point based on icon size
                popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
                shadowSize: [41, 41] // Size of the shadow
            });

            // Add a marker at T-Hub's location with the custom icon
            const marker = L.marker([17.4474, 78.3762], { icon: customIcon }).addTo(map);

            // Highlight the popup text
            marker.bindPopup('<b style="color:blue; font-size:1.2em;">T-Hub (Hyderabad)</b>').openPopup();
            
            // Save map and marker references for future use
            window.mapInstance = map;
            window.markerInstance = marker;

            console.log("Map and marker initialized:", window.mapInstance, window.markerInstance);
        } else {
            console.log("Map instance already exists:", window.mapInstance);
        }
    }, []);

    return <div id="map" style={{ height: '100%', width: '100%' }}></div>; // Set height to 100%
};

export default MapComponent;
