// Initialising the map
var southWest = L.latLng(54.657105, 25.149200),
    northEast = L.latLng(54.724474, 25.401714),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    minZoom: 12,
    maxZoom: 18,
    maxBounds: bounds
}).setView([54.69221264, 25.27933285], 12);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


// Getting the cycle station data from JCDecaux API:
$.getJSON("apidata", function(data){
    for(var i=0; i<data.length; i++){
        var latlng = [data[i].position.lat, data[i].position.lng]
        var popupContent = '<b>' + data[i].address + '</b><br/>' +
                           'Laisvų dviračių: ' + data[i].available_bikes + '<br/>' +
                           'Laisvų vietų: ' + data[i].available_bike_stands;
        var marker = L.marker(latlng, {
                icon: L.letterIcon(data[i].available_bikes, {
                    radius: (data[i].available_bikes < 5) ? 10 : 15,
                    color: (data[i].available_bikes < 5) ? "#EB1A23" : "#F47A43"
                })
        }).addTo(map).bindPopup(popupContent);
    }
});

// Adding the user location on the map:
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
};

function showPosition(position) {
    var userPosition = L.latLng(position.coords.latitude, position.coords.longitude);
    L.circleMarker(userPosition,
    {
        radius: 10,
        color: "#26A9E1",
        stroke: false,
        fillOpacity: 1
    }).addTo(map);
    if (bounds.contains(userPosition)){
        map.setView(userPosition);
    }
}

getLocation();
