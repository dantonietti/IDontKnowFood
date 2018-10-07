function LocationData(lat, long, radius){
    // class to store and retrive information on user location
    
    this.latitude = lat;
    this.longitude = long;
    this.radius = radius;
}

LocationData.prototype.getLatitude = function() {
    return this.latitude;
};
LocationData.prototype.getLongitude = function() {
    return this.longitude;
};
LocationData.prototype.getradius = function() {
    return this.radius;
};


module.exports = LocationData;