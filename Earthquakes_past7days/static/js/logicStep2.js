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

// Earthquake GeoJSON //////////////////////////////////////////////////////////////////////////////////////////////////////////

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

// Adding the EarthQuake data to the Map
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) 
{   // JSON LAYER WITH THE RETRIEVED DATA.
    L.geoJSON(data, {
        // Turning each feature into a circleMarker on the map.
        pointToLayer: function(feature, latlng) {
            // console.log(data);
            return L.circleMarker(latlng);
        },
        // Setting the style for each circleMarker.
        style: styleInfo
    }).addTo(myMap);
});


// Map options control panel
L.control.layers(baseMaps).addTo(myMap);

// Testing GRAYMAP layer
streets.addTo(myMap);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("yo");
