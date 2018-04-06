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

let result = geocode.geocodeAddress(argv.a);