function googlemapinit() {
    console.log("GOOGLE MAP INIT!");
    var uluru = {lat: 45.78034, lng: 15.985182};
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: {lat: 45.78032, lng: 15.985182},
        zoom: 12
    });

    var marker = new google.maps.Marker({position: uluru, map: map});
}

googlemapinit();