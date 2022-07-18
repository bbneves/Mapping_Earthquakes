

// Map object with a center and zoom level
let myMap = L.map('mapid').setView([34.0522,-90.2437], 4);

// Tile layer to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Testing GRAYMAP layer
streets.addTo(myMap);

// Get data from cities.js
let cityData = cities;


// Let's go to LA
// var citiess = L.circleMarker([34.0522,-118.2437], {radius:300, color:"black", fillColor:"#ffffa1"}).addTo(myMap);


  // Looping through every city
cityData.forEach(function(city)
    {console.log(city)
     L.circleMarker(city.location, {radius:(city.population)/100000, color:"orange", colorFill:"orange"}).bindPopup("<h2>"+city.city+", "+city.state+"</h> <hr> <h3>Population "+city.population.toLocaleString()+"</h3>").addTo(myMap);
    });