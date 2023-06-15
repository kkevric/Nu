function googlemapinit() {
    console.log("GOOGLE MAP INIT!");
    var uluru = {lat: 45.77986, lng: 15.98428};
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: {lat: 45.77986, lng: 15.98428},
        zoom: 12
    });

    var marker = new google.maps.Marker({position: uluru, map: map});
}

googlemapinit();