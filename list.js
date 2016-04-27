riot.tag2('list', '<div class="person cf" each="{v in visiblePeople}"> <div class="person-name"> {v.name} </div> <div class="person-location"> {v.location} </div> </div> </div>', 'list .cf:before,[riot-tag="list"] .cf:before,[data-is="list"] .cf:before,list .cf:after,[riot-tag="list"] .cf:after,[data-is="list"] .cf:after{ content: " "; display: table; } list .cf:after,[riot-tag="list"] .cf:after,[data-is="list"] .cf:after{ clear: both; } list .cf,[riot-tag="list"] .cf,[data-is="list"] .cf{ *zoom: 1; } list .person,[riot-tag="list"] .person,[data-is="list"] .person{ padding: 10px; font-size: 13px; border-bottom: 1px solid #ccc; } list .person-name,[riot-tag="list"] .person-name,[data-is="list"] .person-name{ float: left; } list .person-location,[riot-tag="list"] .person-location,[data-is="list"] .person-location{ float: right; }', '', function(opts) {
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
});
