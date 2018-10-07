'use strict';

const xLocationData = require('./LocationData').getLocationData;
const xRestaurantInfo = require('./RestaurantInfo').getRestaurantInfo;


const yelp = require('yelp-fusion');

const apiKey = "1BBlwytIuQpbs_FnDcJNl-quD9QxakqIp8B2excAUKgAqoPEMsvLS_qwZaM973qum2Qth-ynj8uwU5JuuoYfDKI5UqwaHTe2Oq8CDn9Cn4ufeMNSTWfPF0PWhxW5W3Yx";

const client = yelp.client(apiKey);

const place = new LocationData(35.2910, -78.8392, 2000);



function findRestaurant(LocationData) {
    var latitude = place.prototype.getLatitude;
    var longitude = place.prototype.getlongitude;
    var radius = place.prototype.getradius;


    var searchRequest = {
        term: 'food',
        latitude: latitude,
        longitude: longitude,
        radius: radius,
        sort_by: 'rating'
    };
    
    
    
    client.search(searchRequest).then(response => {
        const result = businesses[Math.floor(Math.random() * 30)];
        var name = result.name;
        var address = result.location.address1;
        var rating = result.rating;
        const newRestaurant = new RestaurantInfo(name, address, rating);
        console.log(name);
    }).catch(e => {
    console.log(e);
    });

    return newRestaurant;

    
}






