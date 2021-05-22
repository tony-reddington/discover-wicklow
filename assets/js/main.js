function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.75,
    center: {
      lat: 53.00664,
      lng: -6.71236
    }
  });


  function addmarker(location, info) {
    const lat = location[0]
    const long = location[1]
    console.log(info);
    const marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(lat, long)
    });
    const infowindow = new google.maps.InfoWindow({
      content: info
    })
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    map.panTo(marker.getPosition());
  }
  const SIGHTS_LOCATION = [{
      location: ['53.182391', '-6.102026'],
      infowindow: "<h3>Location 1</h3>"
    },
    {
      location: ['53.072639', '-6.61573'],
      infowindow: "<h3>Location 2</h3>"
    }

  ]
  $('#btn-1').click(function () {
    SIGHTS_LOCATION.forEach(item => {
      const {
        location,
        infowindow
      } = item
      addmarker(location, infowindow)
    })

























    // //   addmarker('53.182391', '-6.102026', "infowindow test 1");
    // //   addmarker('53.072639',	'-6.61573');
    //   addmarker('52.884722',	'-6.232767');
    //   addmarker('53.167049',	'-6.525192');
    //   addmarker('52.935707',	'-6.153202');
    //   addmarker('53.008751',	'-6.107605');
    //   addmarker('53.010476',	'-6.327371');
    //   addmarker('53.185182',	'-6.187094');
    //   addmarker('52.915779',	'-6.306077');
    //   addmarker('53.147003',	'-6.209378');
    //   addmarker('53.107461',	'-6.256886');
    //   addmarker('53.107371',	'-6.217245');
    //   addmarker('52.803644',	'-6.66338');
    //   addmarker('53.13779246',	'-6.312170898');
    //   addmarker('53.08587132',	'-6.219646289');
    //   addmarker('53.18707161',	'-6.396900027');
  });
}