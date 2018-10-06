'use strict';

const yelp = require('yelp-fusion');

const apiKey = "1BBlwytIuQpbs_FnDcJNl-quD9QxakqIp8B2excAUKgAqoPEMsvLS_qwZaM973qum2Qth-ynj8uwU5JuuoYfDKI5UqwaHTe2Oq8CDn9Cn4ufeMNSTWfPF0PWhxW5W3Yx";

const client = yelp.client(apiKey);


function findRestaurant(UserLocation) {
    var latitude = UserLocation.latitude;
    var longitude = UserLocation.longitude;
    var radius = UserLocation.radius;


    var searchRequest = {
        term: 'food',
        latitude: latitude,
        longitude: longitude,
        radius: radius,
        sort_by: 'rating'
    };
    
    
    
    client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
    }).catch(e => {
    console.log(e);
    });
    
}






