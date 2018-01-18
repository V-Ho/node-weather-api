const request = require('request')


exports.geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=${encodedAddress}`,
    json: true  //data recieved as jsons
  }, (error, response, body) => {
    if (body.status === 'OK') {
      callback( undefined, {
        // console.log(JSON.stringify(error, undefined, 2)) //shows JSON error in detail
        // console.log(JSON.stringify(body, undefined, 2)) //shows JSON body in detail
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
    else if (body.status === "ZERO_RESULTS") {
      console.log('Unable to find that address');
    }
    else {
      console.log('Unable to connect to server')
    }
  })

}


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
