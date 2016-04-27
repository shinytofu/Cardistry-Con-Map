window.onload = function() {
  document.querySelector('#page').innerHTML = '<div id="app"><div id="map"></div><list id="list"></list></div>';
  var mapStyle = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 60.128161, lng: 18.643501 },
    zoom: 3,
    maxZoom: 10,
    panControl: false,
    streetViewControl: false,
    styles: mapStyle,
    mapTypeControlOptions: {
      mapTypeIds: []
    }
  });
  riot.mount('list', {
    map: map,
    people: [
      {
        "name": "Ladislas Toubart",
        "location": "Belgium",
        "lat": 50.503887,
        "lng": 4.469936
      },
      {
        "name": "Zach Mueller",
        "location": "California, USA",
        "lat": 36.778261,
        "lng": -119.4179324
      },
      {
        "name": "Franco Pascali",
        "location": "California, USA",
        "lat": 36.778261,
        "lng": -119.4179324
      },
      {
        "name": "Michael Stern",
        "location": "California, USA",
        "lat": 36.778261,
        "lng": -119.4179324
      },
      {
        "name": "Dan Buck",
        "location": "California, USA",
        "lat": 36.778261,
        "lng": -119.4179324
      },
      {
        "name": "Dave Buck",
        "location": "California, USA",
        "lat": 36.778261,
        "lng": -119.4179324
      },
      {
        "name": "Tobias Levin",
        "location": "Denmark",
        "lat": 56.26392,
        "lng": 9.501785
      },
      {
        "name": "Oliver Sogard",
        "location": "Denmark",
        "lat": 56.26392,
        "lng": 9.501785
      },
      {
        "name": "Nikolaj Pedersen",
        "location": "Denmark",
        "lat": 56.26392,
        "lng": 9.501785
      },
      {
        "name": "David Pedersen",
        "location": "Denmark",
        "lat": 56.26392,
        "lng": 9.501785
      },
      {
        "name": "Dennis Jin",
        "location": "Sweden",
        "lat": 60.128161,
        "lng": 18.643501
      },
      {
        "name": "Dimitri Arleri",
        "location": "France",
        "lat": 46.227638,
        "lng": 2.213749
      },
      {
        "name": "Antoine Thomas",
        "location": "France",
        "lat": 46.227638,
        "lng": 2.213749
      },
      {
        "name": "Franky Morales",
        "location": "Illinois, USA",
        "lat": 40.6331249,
        "lng": -89.3985283
      },
      {
        "name": "Shivraj Morzaria",
        "location": "India",
        "lat": 20.593684,
        "lng": 78.96288
      },
      {
        "name": "Aviv Moraly",
        "location": "Israel",
        "lat": 31.046051,
        "lng": 34.851612
      },
      {
        "name": "Bas John",
        "location": "Netherlands",
        "lat": 52.132633,
        "lng": 5.291266
      },
      {
        "name": "Adam Kerchman",
        "location": "New York, USA",
        "lat": 40.7127837,
        "lng": -74.0059413
      },
      {
        "name": "Chris Hestnes",
        "location": "Norway",
        "lat": 60.472024,
        "lng": 8.468946
      },
      {
        "name": "Henrik Forberg",
        "location": "Norway",
        "lat": 60.472024,
        "lng": 8.468946
      },
      {
        "name": "Chase Duncan",
        "location": "Oregon, USA",
        "lat": 43.8041334,
        "lng": -120.5542012
      },
      {
        "name": "Andrew Avila",
        "location": "Oregon, USA",
        "lat": 43.8041334,
        "lng": -120.5542012
      },
      {
        "name": "Kevin Ho",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Huron Low",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Daren Yeow",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Joshua Tan",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Jeremy Tan",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Jaspas Deck",
        "location": "Singapore",
        "lat": 1.352083,
        "lng": 103.819836
      },
      {
        "name": "Jeongseon",
        "location": "South Korea",
        "lat": 35.907757,
        "lng": 127.766922
      },
      {
        "name": "Alejandro Portela",
        "location": "Spain",
        "lat": 40.463667,
        "lng": -3.74922
      },
      {
        "name": "Noel Heath",
        "location": "Sweden",
        "lat": 60.128161,
        "lng": 18.643501
      },
      {
        "name": "Brendan Conner",
        "location": "Vancouver, Canada",
        "lat": 49.2827291,
        "lng": -123.1207375
      },
      {
        "name": "Duy Nguyen",
        "location": "Vietnam",
        "lat": 14.058324,
        "lng": 108.277199
      },
      {
        "name": "Spencer Clark",
        "location": "Washington, USA",
        "lat": 38.9071923,
        "lng": -77.0368707
      },
      {
        "name": "Chris Severson",
        "location": "Wisconsin, USA",
        "lat": 43.7844397,
        "lng": -88.7878678
      }
    ]
  });
}
