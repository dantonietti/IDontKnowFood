

function RestaurantInfo(name, address, rating) {


    this.name = name
    this.address = address
    this.rating = rating
}

   
RestaurantInfo.prototype.getName = function() {
    return this.latitude;
};
RestaurantInfo.prototype.getName = function() {
    return this.longitude;
};
RestaurantInfo.prototype.getName = function() {
    return this.radius;
};

module.exports = RestaurantInfo;