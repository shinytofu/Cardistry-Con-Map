window.onload = function() {
  if (document.querySelector('#page')) {
    document.querySelector('#page').innerHTML = '<div id="app"><div id="map"></div><list id="list"></list></div>';
  }
  var mapStyle = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45, lng: 18 },
    zoom: 2,
    maxZoom: 10,
    panControl: false,
    streetViewControl: false,
    styles: mapStyle,
    mapTypeControlOptions: {
      mapTypeIds: []
    }
  });
  var request = new XMLHttpRequest();
  request.open('GET', 'https://spreadsheets.google.com/feeds/list/1vhS5jEwAcrG6CKkuWJj1K8yc_l3QtP1N1AhBOo4CFfY/od6/public/full?alt=json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      data = _.map(data.feed.entry, (entry) => {
        var metaData = {
          name: _.get(entry, 'gsx$name.$t'),
          location: _.get(entry, 'gsx$location.$t'),
          lat: parseFloat(_.get(entry, 'gsx$lat.$t')),
          lng: parseFloat(_.get(entry, 'gsx$lng.$t')),
          countryCode: _.get(entry, 'gsx$countrycode.$t')
        };
        return metaData;
      });
      riot.mount('list', {
        map: map,
        people: data
      });
      google.maps.event.trigger(map, 'center_changed');
    }
  };
  request.onerror = function() {

  };
  request.send();
}
