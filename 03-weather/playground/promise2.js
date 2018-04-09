var request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
        request({url:url, json:true}, (error, response, body)=>{
            if(error){
                reject('Error');
            } else if (body.results.length<1) {
                reject('Unable to find the address');
            } else if(body.status==="OK") {
                var results = {
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng
                };
                resolve(results);
            }
        });
    });
}

geocodeAddress('38 Circular Road, M20 3LP').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
}).catch((error)=>{
    console.log(error);
});