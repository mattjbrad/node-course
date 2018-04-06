const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            describe: 'get weather for address',
            string:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`;
request({url:url, json:true},
 (error, response, body)=>{
     if(error){
        console.log('Error');
     } else if (body.results.length<1) {
        console.log('Unable to find the address');
     } else if(body.status==="OK") {
        console.log(`Address:${body.results[0].formatted_address}`);console.log(`Lat:${body.results[0].geometry.location.lat}`);console.log(`Long:${body.results[0].geometry.location.lng}`);
     }
})