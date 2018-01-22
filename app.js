const yargs = require('yargs') //used to build interactive command line tools

const weather = require('./weather/weather')
const geocode = require('./geocode/geocode')

//OPTIONS CONFIGURATION FOR USER INPUT IN COMMAND LINE
const argv = yargs
  .options({
    a: {
      demand: true,     //req input for address
      alias: 'address', //'a' is alias for address
      describe: 'Address to fetch weather for',
      string: true      //tells yargs to pass argument as string
    }
  })
  .help()
  .alias('help', 'h')   //setting up help alias with 2 args $ node app.js --help
  .argv;                 //stores everything above in const argv

// console.log(argv)     //will log everything parsed by yargs

//Run geocodeAddress function from geocode.js
// geocode.geocodeAddress(argv.address, (errorMsg, res) => {
//   if (errorMsg) {
//     console.log('Geocode error:', errorMsg)
//   } else {
//     console.log(JSON.stringify(res, undefined, 2))
//   }
// })
/*
Run geocode with:
$node app.js -a '488 Heatherhill Pl Waterloo'

returns:
{
  "address": "488 Heather Hill Pl, Waterloo, ON N2T 1H7, Canada",
  "lat": 43.448972,

  "lng": -80.5585481
}

Here we input our desired address in the command line.
App.js passes in address from geocode.js, then returns result from api fetch
*/

weather.getWeather(43.448972, -80.5585481, (errorMsg, res) => {
  if (errorMsg) {
    console.log(errorMsg)
  } else {
    console.log(JSON.stringify(res, undefined, 2)) //undefined: filtering, 2: indent
  }
})
/*
Here we are calling the getWeather function from weather.js
-Pass in lat, lng and callback fuction that takes in errorMsg & results as arguments
-getWeather has dynamic url that takes is $lat and $lng passed in from app.js
-getWeather makes HTTP req using lat & lng, and provides error, response, body
-Calback function is fired after HTTP req gives response
-Callback function provides us with either errorMsg or response obj (defined in getWeather)

*/
