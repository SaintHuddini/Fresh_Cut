function initMap() {
    var locations = [
        ['F.F in Stockholm', 59.334591, 18.063240],
        ['F.F in Paris', 48.864716, 2.349014],
        ['F.F in London', 51.509865, -0.118092]
    ];

    //where the map should focus on
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: new google.maps.LatLng(57.046707, 9.935932),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;

    //A loop for getting more than 1 marker.
    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        
        //Message pops up when you click on the marker
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }
}
