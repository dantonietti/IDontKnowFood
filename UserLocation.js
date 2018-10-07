class UserLocation{
    // class to store and retrive information on user location
    
    constructor() {
        this.latitude = latitude
        this.longitude = longitude
        this.radius = radius
    }

    get latitude() {
        return this.latitude
    }
    
    get longitude() {
        return this.longitude
    }

    get radius() {
        return this.radius
    }

    set latitude(lat) {
        this.latitude = lat;
    }

    set longitude(long) {
        this.longitude = long;
    }

    set radius(newRadius) {
        this.radius = newRadius
    }

}