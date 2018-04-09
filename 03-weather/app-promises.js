const yargs = require('yargs');
const axios = require('axios');

const weatherKey = '689591d2ac690bd1395766eed4c0b41e';
const geoKey = 'AIzaSyByIvF4f5jYVnbLNZtexXi2T5Mwf4h2b0U';


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

    var addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}&key=${geoKey}`;
    axios.get(addressUrl).then((response)=>{
        if (response.data.status ==='ZERO_RESULTS'){
            throw new Error('Unable to find address');
        }
        var address = response.data.results[0].formatted_address;
        var lat = response.data.results[0].geometry.location.lat;
        var long = response.data.results[0].geometry.location.lng;

        var weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${long}`;
        
        // This returns a promise so if you return it you can start to chain requests.
        return axios.get(weatherUrl);
    
    }).then((response)=>{
        var temp = response.data.currently.temperature;
        var apparentTemp = response.data.currently.apparentTemperature;
        console.log(response.data.currently);
    }).catch((error)=>{
        console.log(error);
    });
