const request = require('request');

var geocodeAddress = (address, callback)=>{
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    request({url:url, json:true},
     (error, response, body)=>{
         if(error){
            callback('Error');
         } else if (body.results.length<1) {
            callback('Unable to find the address');
         } else if(body.status==="OK") {
             var results = {
                 address:body.results[0].formatted_address,
                 latitude:body.results[0].geometry.location.lat,
                 longitude:body.results[0].geometry.location.lng
             };
             callback(undefined, results );
         }
    })
};

module.exports.geocodeAddress = geocodeAddress;
