const apiKey = '689591d2ac690bd1395766eed4c0b41e';
const request = require('request');

var getWeather = (lat, long, callback)=>{

    request({url:`https://api.darksky.net/forecast/${apiKey}/${lat},${long}`, json:true}, (error, response, body)=>{
        if (!error&&response.statusCode===200){
            callback(undefined, body.currently);
        } else {
            callback(error);
        }
    });
}

module.exports.getWeather = getWeather;
