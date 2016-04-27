<list>
  <div
    class="person cf"
    each={ v in visiblePeople }
  >
    <div class="person-name">
      { v.name }
    </div>
    <div class="person-location">
      { v.location }
    </div>
  </div>
  </div>
  <style scoped>
    .cf:before,
    .cf:after {
      content: " ";
      display: table;
    }
    .cf:after {
      clear: both;
    }
    .cf {
      *zoom: 1;
    }
    .person {
      padding: 10px;
      font-size: 13px;
      border-bottom: 1px solid #ccc;
    }
    .person-name {
      float: left;
    }
    .person-location {
      float: right;
    }
  </style>
  <script>
    var self = this;
    var props = this.opts;
    var markers = [];

    self.visiblePeople = [];

    for (var i = 0; i < props.people.length; i++) {
      var marker = new google.maps.Marker({
        position: {
          lat: props.people[i].lat,
          lng: props.people[i].lng
        },
        person: props.people[i]
      });
      google.maps.event.addListener(marker, 'click', function(e) {
        props.map.panTo(e.latLng);
      });
      markers.push(marker);
      marker.setMap(props.map);
    }

    props.map.addListener('center_changed', function() {
      for (var i = 0; i < markers.length; i++) {
        self.visiblePeople = markers.filter(function(marker) {
          return props.map.getBounds().contains(marker.getPosition());
        }).map(function(marker) {
          return marker.person;
        });
      }
      self.update();
    });

    google.maps.event.addListenerOnce(props.map, 'tilesloaded', function() {
      google.maps.event.trigger(props.map, 'center_changed');
    });
  </script>
</list>
