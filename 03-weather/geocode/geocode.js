const request = require('request');

var geocodeAddress = (address)=>{
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    request({url:url, json:true},
     (error, response, body)=>{
         if(error){
            console.log('Error');
         } else if (body.results.length<1) {
            console.log('Unable to find the address');
         } else if(body.status==="OK") {
            console.log(`Address:${body.results[0].formatted_address}`);console.log(`Lat:${body.results[0].geometry.location.lat}`);console.log(`Long:${body.results[0].geometry.location.lng}`);
            return body;
         }
    })
};

module.exports.geocodeAddress = geocodeAddress;
