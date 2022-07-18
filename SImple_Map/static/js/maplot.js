

// Map object with a center and zoom level
let myMap = L.map('mapid').setView([30, 30], 2);
// Line coordinate LAX to SFO
let lines = [[33.9416, -118.4085],
[37.6213, -122.3790],
[40.7899, -111.9791],
[47.4502, -122.3088]];

// Tile layer to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Testing GRAYMAP layer
streets.addTo(myMap);

// Get data from cities.js
let cityData = cities;
let sanFrans = sanFranAirport


// Let's go to LA
// var citiess = L.circleMarker([34.0522,-118.2437], {radius:300, color:"black", fillColor:"#ffffa1"}).addTo(myMap);


  // Looping through every city
// cityData.forEach(function(city)
//     {console.log(city)
//      L.circleMarker(city.location, {radius:(city.population)/100000, color:"orange", colorFill:"orange"}).bindPopup("<h2>"+city.city+", "+city.state+"</h> <hr> <h3>Population "+city.population.toLocaleString()+"</h3>").addTo(myMap);
//     });


// // Creating polyline using the lines coordinates.
// L.polyline(lines,{color:"blue"}).addTo(myMap);


// Getting the GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(myMap);

// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>"+feature.properties.city+ ", "+ feature.properties.country +"</h3>");
//     }

//   }).addTo(myMap);

  L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature,layer) {
        console.log(layer);
        layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2><hr><h3>Aiport Name: "+feature.properties.name +"</h3>");
    }
  }).addTo(myMap);

