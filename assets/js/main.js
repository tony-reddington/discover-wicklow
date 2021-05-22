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
      content: info,
      maxWidth: 200
    })
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    map.panTo(marker.getPosition());
  }
  // Array that holds all "sights" cooardinates and info window content on index.html//
  const SIGHTS_LOCATION = [{
      location: ['53.182391', '-6.102026'],
      infowindow: '<p class="infoWindowHeader font-style">Killruddery House</p>' +
        '<p class="infoWindowText font-style">Enjoy a relaxing and leisurely walks in one of Ireland’s most renowned gardens followed by a beverage and cake in their Tea room.</p>' +
        '<p class="infoWindowLink font-style"><a href="http://www.killruddery.com/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.072639', '-6.61573'],
      infowindow: '<p class="infoWindowHeader font-style">Athgreany Stone Circle</p>' +
        '<p class="infoWindowText font-style">A megalith stone circle containing fourteen stones from Ireland ancient past.</p>' +
        '<p class="infoWindowLink font-style"><a href="http://www.megalithicireland.com/Athgreany%20Stone%20Circle.html" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.167049', '-6.525192'],
      infowindow: '<p class="infoWindowHeader font-style">The Blessington Greenway</p>' +
        '<p class="infoWindowText font-style">This trail starts in Blessington town and weaves between the Blessington Lake shore and forestry.</p>' +
        '<p class="infoWindowLink font-style"><a href="https://blessington.ie/greenway/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['52.935707', '-6.153202'],
      infowindow: '<p class="infoWindowHeader font-style">The National Botanic Gardens</p>' +
        "<p class='infoWindowText font-style'>Deemed as one of Ireland foremost heritage gardens, it's home to a collection of old and unusual Trees, wildflower meadows and double herbacious borders.</p>" +
        '<p class="infoWindowLink font-style"><a href="http://botanicgardens.ie/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.008751', '-6.107605'],
      infowindow: '<p class="infoWindowHeader font-style">Mount Usher Gardens</p>' +
        "<p class='infoWindowText font-style'>These gardens house a collection of trees and shrubs with inspirational floral planting schemes, they also house an Avoca coffee shop to rest those weary legs after your stroll.</p>" +
        '<p class="infoWindowLink font-style"><a href="http://www.mountushergardens.ie/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.010476', '-6.327371'],
      infowindow: '<p class="infoWindowHeader font-style">Glendalough</p>' +
        "<p class='infoWindowText font-style'>Glendalough is home to a 6th century monastic settlement which eventually became a monastic city with 2 x pictureque lakes alongside. A must see!</p>" +
        '<p class="infoWindowLink font-style"><a href="https://www.glendalough.ie/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.185182', '-6.187094'],
      infowindow: '<p class="infoWindowHeader font-style">Powerscourt House & Gardens</p>' +
        "<p class='infoWindowText font-style'>Voted no. 3 in the worlds top ten gardens, it's home to formal gardens, sweeping terraces, statues and ornamental lakes, secret hollows and rambling walks plus a coffee shop to take a rest.</p>" +
        '<p class="infoWindowLink font-style"><a href="http://powerscourt.com" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['52.915779', '-6.306077'],
      infowindow: '<p class="infoWindowHeader font-style">Greenan Maze</p>' +
        "<p class='infoWindowText font-style'>Located in the Wicklow hills, the attractions feature two mazes, three museums, nature walks, woodlands, ponds, wildlife, farm animals, play areas, treasure hunt and fairy tree walk. Great for children!</p>" +
        '<p class="infoWindowLink font-style"><a href="http://www.greenanmaze.com/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.147003', '-6.209378'],
      infowindow: '<p class="infoWindowHeader font-style">Powerscourt Waterfall</p>' +
        "<p class='infoWindowText font-style'>Powerscourt Waterfall is Wicklow's highest, the property allows patrons to have a bbq/picnic beneath the beautiful waterfall plus they have a childrens playground.</p>" +
        '<p class="infoWindowLink font-style"><a href="https://powerscourt.com/waterfall" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.107461', '-6.256886'],
      infowindow: '<p class="infoWindowHeader font-style">Lough Tay (Guinness Lake)</p>' +
        "<p class='infoWindowText font-style'>Lake visible from the mountian peak above the lake. The lake is said to look like a pint of Guinness plus it was previously owned by the Guinness family.</p>" +
        '<p class="infoWindowLink font-style"><a href="https://www.tripadvisor.ie/Attraction_Review-g186646-d14152818-Reviews-Guinness_Lake-Wicklow_County_Wicklow.html" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['52.803644', '-6.66338'],
      infowindow: '<p class="infoWindowHeader font-style">Rathgall Hillfort</p>' +
        "<p class='infoWindowText font-style'>This is a multivallate hillfort, on the edge of a ridge with four concentric stone walls and extensive panoramic views.</p>" +
        '<p class="infoWindowLink font-style"><a href="https://voicesfromthedawn.com/rathgall/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.137792457865', '-6.3121708981475'],
      infowindow: '<p class="infoWindowHeader font-style">Sally Gap</p>' +
        "<p class='infoWindowText font-style'>Take a drive by car and soak in the spectacular views of the surrounding blanket bog and the Wicklow Mountains.</p>" +
        '<p class="infoWindowLink font-style"><a href="https://www.tripadvisor.ie/Attraction_Review-g186646-d3750353-Reviews-Sally_Gap-Wicklow_County_Wicklow.html" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.0858713226281', '-6.21964628903168'],
      infowindow: '<p class="infoWindowHeader font-style">Victors Way</p>' +
        "<p class='infoWindowText font-style'>A beautiful forest garden notable for its giant black granite hindu sculptures.</p>" +
        '<p class="infoWindowLink font-style"><a href="http://victorsway.eu/" target="_blank">Click for more info!</a></p>'
    },
    {
      location: ['53.1870716129907', '-6.39690002727892'],
      infowindow: '<p class="infoWindowHeader font-style">Seefin Passage Tomb</p>' +
        "<p class='infoWindowText font-style'>Neolithic passage tomb located atop Seefin Hill with incredible views.</p>" +
        '<p class="infoWindowLink font-style"><a href="https://en.wikipedia.org/wiki/Seefin_Passage_Tomb" target="_blank">Click for more info!</a></p>'
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
  });

}