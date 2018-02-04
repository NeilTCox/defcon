var userInput = document.getElementById('zipcode');
var button = document.getElementById('submitButton');


button.addEventListener('click', userZip);


function userZip(){ // called when button clicked
     return userInput.value;
}


function convertZip(zipCode){
    // converts zipcode to lat and long
    console.log("Zipcode is", zipCode);

    return {lat: 33.642534, lng: -117.84195}
}

//
// function geoSuccess(position) {
//     var userLat = position.coords.latitude;
//     var userLong = position.coords.longitude;
//
//     console.log("user lat", userLat, "long", userLong);
// }
//
// navigator.geolocation.getCurrentPosition(geoSuccess);

var map;
var infowindow;


function initMap() {
    var pyrmont = {lat: -33.867, lng: 151.195};

  //var pyrmont = {lat: userLat, lng: userLong};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['park']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}


function createNotif(disaster) {
  Push.create("[URGENT] Emergency!", {
    body: 'Type: ' + disaster.type + ' // click for details',
    timeout: 5000,
    onClick: function() {
      alert('clicked!!');
    }
  });
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("You're all set up to receive alerts!");
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("You're good to go!");
            }
        });
    }
    // Finally, if the user has denied notifications and you
    // want to be respectful there is no need to bother them any more.
}
