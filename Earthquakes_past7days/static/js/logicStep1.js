console.log("YaY");

// Tile layer to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Adding the Fourth Map Layer
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Base Layer for hold the MAPS
let baseMaps = {
    Street: streets,
    Satellite: satellite
};

// Map object with a center and zoom level
let myMap = L.map('mapid', {
    center: [38, -84.3],
    zoom: 4,
    layer:[streets]
});
// let myMap = L.map('mapid').setView([30, 30], 2);

// Earthquake GeoJSON
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // JSON LAYER WITH THE RETRIEVED DATA.
    L.geoJSON(data).addTo(myMap);
});


// Map options control panel
L.control.layers(baseMaps).addTo(myMap);

// Testing GRAYMAP layer
streets.addTo(myMap);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("yo");
