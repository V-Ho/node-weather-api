const request = require('request')
const yargs = require('yargs') //used to build interactive command line tools

const geocode = require('./geocode/geocode.js')

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

console.log(argv)     //will log everything parsed by yargs

geocode.geocodeAddress(argv.address) //takes in address from argv command-line

/*

Run code with:
$node app.js -a '488 Heatherhill Pl Waterloo'

Here we input our desired address in the command line.
App.js fetches formatted address, lat and lng.  The address is then passed to an encodedURI
component, which is injected into the url.



*/
