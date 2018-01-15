const request = require('request')
const yargs = require('yargs') //used to build interactive command line tools

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

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://map.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=${encodedAddress}`,
  json: true  //data recieved as jsons
}, (error, response, body) => {
  if (body.status === 'OK') {
    // console.log(JSON.stringify(error, undefined, 2)) //shows JSON error in detail
    // console.log(JSON.stringify(body, undefined, 2)) //shows JSON body in detail
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Lat: ${body.results[0].geometry.location.lat} &
      Lng: ${body.results[0].geometry.location.lng}`)
  }
  else if (body.status === "ZERO_RESULTS") {
    console.log('Unable to find that address');
  }
  else {
    console.log('Unable to connect to server')
  }
})


//request takes 2 arguments: options object (ex maps data) & callback function
//options object: unique url property & json property
//callback: after url reached, then we call (error, response, body)
/* Request callback includes 3 arguments: once the url is recieved, the callback response includes:
Error: errors made during HTTP request - ex address incorrect, machine doesn't have access
Response: entire response object, including uri, headers, method, body
Body: the body of json data returned by Google API

Headers: sent from Google API server to Node server, accepting application/JSON
Request: uri object includes protocol (https), port, hostname
StatusCode: HTTP errors ex 200

Run code with:
$node app.js -a '488 Heatherhill Pl Waterloo'

Here we input our desired address in the command line.
App.js fetches formatted address, lat and lng.  The address is then passed to an encodedURI
component, which is injected into the url.



*/
