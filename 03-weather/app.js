const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (error, results)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (error, results)=>{
            if(error){
                console.log(error);
            } else {
                console.log(`It is currently ${results.temperature} and it fells like ${results.apparentTemperature}`);
            }
        });
    }
});

