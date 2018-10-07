function searchLocation1() {
    if(myLat == '' && myLng == ''){
        var myLoc = navigator.geolocation.getCurrentPosition(function(position) {
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        alert(myLat + " | " + myLng);
        userData.latitude = myLat;
        userData.longitude = myLng;
        return myLat;
        });
    }else{
        alert(myLat + " | " + myLng);
        alert(userData.get(latitude) + "            " + userData.get(longitude));
        return myLat;
    }

}