const request = require('request');
const Promise = require('promise-simple');
      module.exports = function getGeocode(location)
    {
        var result;
        var d = Promise.defer();
        var baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDZ8y_tQECIdFBbHY4jABqVByCwMb7ICBM&address=' + location;
    request(baseURL, function(e, r, b){
        if(!e && r.statusCode == 200){
            result = (JSON.parse(b).results[0].geometry.location);
            console.log(result);
            d.resolve(result);
        }else{
            d.reject(e);
        }
    });
    return d;
}



