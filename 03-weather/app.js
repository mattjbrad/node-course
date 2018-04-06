const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});