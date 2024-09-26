import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
            
            // Add a marker at T-Hub's location
            const marker = L.marker([17.4474, 78.3762]).addTo(map);
            marker.bindPopup('T-Hub (Hyderabad)').openPopup();
            
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
