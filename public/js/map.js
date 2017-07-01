var myCenter =
{
    pl: {lat: 52, lng: 19.5},
    cz: {lat: 49.5, lng: 15.5},
    sk: {lat: 48.5, lng: 19},
    hu: {lat: 47, lng: 19.5},
    de: {lat: 51, lng: 10.5}
};
var myZoom =
{
    pl: 7,
    cz: 7,
    sk: 8,
    hu: 7,
    de: 6
};

var stylesArray = [
  {"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
  {"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
  {"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
  {"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
  {"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
  {"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
  {"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
  {"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},
  {"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}
];
var markers = [];

function initMap() {
  var styledMap = new google.maps.StyledMapType(stylesArray,
    {name: "Styled Map"});
  var mapOptions = {
    zoom: myZoom[lang_param],
    center: myCenter[lang_param],
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  setMarkers(map);
}

function setMarkers(map) {
  var infoWindow = new google.maps.InfoWindow();
  for (var i = 0; i < myPoints.length; i++) {
    var myPoint = myPoints[i];
    var marker = new google.maps.Marker({
      position: {lat: myPoint.lat, lng: myPoint.lng},
      map: map,
//      icon: { url: 'img/' + myPoint.type + '.png' },
      title: myPoint.company,
      info: myPoint.info
    });
    marker.addListener('click', function() {
      infoWindow.setContent( this.info );
      infoWindow.open( map, this );
    });
    markers.push(marker);
  }
//  var markerCluster = new MarkerClusterer(map, markers);
}
