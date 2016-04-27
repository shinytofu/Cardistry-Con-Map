<list>
  <div id="people">
    <div
      class={
        cf: true,
        person: true,
        focus: _.map(focusPeople, 'name').indexOf(v.name) > -1
      }
      each={ v in visiblePeople }
      onclick={ focus }
    >
      <div class="person-name">{ v.name }</div>
      <div class="person-location">{ v.location }</div>
    </div>
  </div>
  <style scoped>
    .people {
    }
    .person {
      padding: 10px;
      color: #999;
      font-size: 13px;
      border-bottom: 1px solid #ccc;
    }
    .person.focus {
      color: #357cfe;
    }
    .person-name {
      float: left;
      font-weight: bold;
    }
    .person-location {
      float: right;
      color: #ccc;
    }
  </style>
  <script>
    var self = this;
    var props = this.opts;
    var markers = [];

    self.visiblePeople = [];
    self.focusPeople = [];

    var markerSVG = {
      path: 'M78.5,34.2C78.5,56.3,50,94.3,50,94.3S21.5,56.5,21.5,34.2C21.5,18.4,34.2,5.7,50,5.7S78.5,18.4,78.5,34.2z',
      scale: 0.4,
      fillColor: '#ffdc1a',
      fillOpacity: 1,
      anchor: new google.maps.Point(58, 90),
      labelOrigin: new google.maps.Point(48, 40)
    }
    var markerSVGSelected = {
      path: 'M78.5,34.2C78.5,56.3,50,94.3,50,94.3S21.5,56.5,21.5,34.2C21.5,18.4,34.2,5.7,50,5.7S78.5,18.4,78.5,34.2z',
      scale: 0.4,
      fillColor: '#f8f1cc',
      fillOpacity: 1,
      anchor: new google.maps.Point(58, 90),
      labelOrigin: new google.maps.Point(48, 40)
    }

    for (var i = 0; i < props.people.length; i++) {
      var marker = new google.maps.Marker({
        icon: markerSVG,
        position: {
          lat: props.people[i].lat,
          lng: props.people[i].lng
        },
        label: {
          color: '#413700',
          fontSize: '13',
          fontWeight: '900',
          fontFamily: 'Arial',
          text: '1'
        },
        people: [props.people[i]]
      });
      var duplicateMarker = markers.find(function(secondMarker) {
        return (
          marker.getPosition().lat() === secondMarker.getPosition().lat() &&
          marker.getPosition().lng() === secondMarker.getPosition().lng()
        );
      });
      if (duplicateMarker) {
        duplicateMarker.setOptions({
          people: duplicateMarker.people.concat(props.people[i])
        });
        duplicateMarker.setLabel({
          text: Number(duplicateMarker.people.length).toString() || "0",
          color: '#413700',
          fontSize: '13',
          fontWeight: '900',
          fontFamily: 'Arial'
        });
      } else {
        marker.addListener('click', function(e) {
          self.focus(this);
        });
        marker.setMap(props.map);
        markers.push(marker);
      }
    }

    props.map.addListener('center_changed', function() {
      self.visiblePeople = markers.filter(function(marker) {
        return props.map.getBounds().contains(marker.getPosition());
      })
      .map(function(marker) {
        return marker.people;
      });

      if (self.visiblePeople.length) {
        self.visiblePeople = self.visiblePeople.reduce(function(a, b){
          return a.concat(b);
        });
      }

      self.visiblePeople = _.chain(self.visiblePeople)
      .sortBy('name')
      .sortBy(function(person) {
        return _.map(self.focusPeople, 'name').indexOf(person.name) > -1 ? '0' : '1';
      })
      .value();
      self.update();
    });

    google.maps.event.addListenerOnce(props.map, 'tilesloaded', function() {
      google.maps.event.trigger(props.map, 'center_changed');
    });

    focus(marker) {
      if (marker === self.focusMarker) {
        marker.setIcon(markerSVG);
        self.focusMarker = null;
        self.focusPeople = [];
      } else {
        if (self.focusMarker) {
          self.focusMarker.setIcon(markerSVG);
        }
        marker.setIcon(markerSVGSelected);
        props.map.panTo(marker.getPosition());
        self.focusMarker = marker;
        self.focusPeople = marker.people;
      }
      google.maps.event.trigger(props.map, 'center_changed');
    }
  </script>
</list>
