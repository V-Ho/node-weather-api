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
geocode.geocodeAddress(argv.address, (errorMsg, geoRes) => {
  if (errorMsg) {
    console.log('Geocode error:', errorMsg)
  } else {
    console.log(`${geoRes.address} has coordinates ${geoRes.lat}, ${geoRes.lng}`);
    weather.getWeather(geoRes.lat, geoRes.lng, (errorMsg, weatherRes) => {
      if (errorMsg) {
        console.log(errorMsg)
      } else {
        console.log(`Actual temperature: ${weatherRes.temperature}. Feels like: ${weatherRes.apparentTemperature}`)
      }
    })
  }
})
/*
Run geocode with:
$node app.js -a '488 Heatherhill Pl Waterloo'

Here we pass in address from argv command line
-geocodeAddress gives lat & lng in response object
-lat & lng passed as args to getWeather
-getWeather gives temperatures if callback successful

*/
