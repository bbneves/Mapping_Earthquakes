// Tile layer to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Adding the Second Map Layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Adding the Third Map Layer
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Base Layer for hold the MAPS
let baseMaps = {
    Street: streets,
    Dark: dark,
    Light: light
};

// Map object with a center and zoom level
let myMap = L.map('mapid', {
    center: [-79.39119482699992, 43.68108112399995],
    zoom: 8,
    layer:[streets]
});
// let myMap = L.map('mapid').setView([30, 30], 2);

// Map options control panel
L.control.layers(baseMaps).addTo(myMap);

// Testing GRAYMAP layer
streets.addTo(myMap);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AIRPORT CODE ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/bbneves/Mapping_Earthquakes/main/SImple_Map/majorAirports.json";

// // Getting Data com the GIT GEOJSON
// d3.json(airportData).then(function(data) {
//     // console.log(data);
//     //Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data,{
//         onEachFeature: function(feature,layer) {
//             console.log(layer);
//             layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + 
//             "</h2><hr><h3>Aiport Name: "+feature.properties.name +"</h3>")}}).addTo(myMap)});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toronto COde/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Accessing Toronto GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/bbneves/Mapping_Earthquakes/main/SImple_Map/torontoRoutes.json";

// // Styling the lines
// let myStyle = {
//     color:"#ffffa1",
//     weight:2
// };

// d3.json(torontoData).then(function(data){
//     console.log(data);
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature,layer){
//             layer.bindPopup("<h2> Airline: "+ feature.properties.airline +
//             "</h2><hr><h3>Destination: "+ feature.properties.dst +"</h3>")
//         }
//     }).addTo(myMap);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TORONTO NEIGHBORHOOD POLYGON /////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//    for (let i=0; i<data.features.length;i++){
    // console.log(data.features[i].properties.city);
    // L.geoJSON(data).bindPopup("<h2> Airport Code: " + data.features[i].properties.faa + "</h2><hr><h3>Aiport Name: "+ data.features[i].properties.name +"</h3>").addTo(myMap);


// L.geoJSON(sanFranAirport, {
//         onEachFeature: function(feature,layer) {
//             console.log(layer);
//             layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2><hr><h3>Aiport Name: "+feature.properties.name +"</h3>")}});



// PRACTICE AREA

// Line coordinate LAX to SFO
// let lines = [[33.9416, -118.4085],
// [37.6213, -122.3790],
// [40.7899, -111.9791],
// [47.4502, -122.3088]];

// // Get data from cities.js
// let cityData = cities;
// let sanFrans = sanFranAirport


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

//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature,layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2><hr><h3>Aiport Name: "+feature.properties.name +"</h3>");
//     }
//   }).addTo(myMap);