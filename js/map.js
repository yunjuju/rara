// map1
var container = document.getElementById('map1');
var option = {
    center: new kakao.maps.LatLng(37.58421, 127.00194),
    level: 3
};

var map = new kakao.maps.Map(container, option);
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.58421, 127.00194)
});
marker.setMap(map);

// map2
var container2 = document.getElementById('map2');
var option2 = {
    center: new kakao.maps.LatLng(37.55729, 126.92508),
    level: 3
};

var map2 = new kakao.maps.Map(container2, option2);
var marker2 = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.55729, 126.92508)
});
marker2.setMap(map2);
