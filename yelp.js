let yelpAPI = require('yelp-api');
let apiKey = 'tzg6p03QxCkKZH4SCHwtBKrTFtZMzbVItYbyAeBjgy9JMIVyJxuIC6ab8nJmdK1ch2_m9gGnLEiahVpkyELdPPqe_LL3dSOlIWVoxw7y8INuqLotVx1N2_LCe3C5W3Yx';
let yelp = new yelpAPI(apiKey);
import {searchLocation1} from 'jank';
let lat = searchLocation1();
import {searchLocation2} from 'jank';
let lng = searchLocation2();

let params = [{ location: ll= (lat + "," + lng) }]; 
// Call the endpoint
yelp.query('businesses/search?categories=food', params)
.then(data => {
  // Success
  console.log(data);
})
.catch(err => {
  // Failure
  console.log(err);
});
//https://api.yelp.com/v3/businesses/search?categories=food&ll=-39.86666700,176.28333300
