const request = require('request')

//request takes 2 arguments: options object (ex maps data) & callback function
//options object: unique url property & json property
//callback: after url reached, then we call (error, response, body)
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=8%20bilderdijkpark%20amsterdam',
  json: true  //data recieved as jsons
}, (error, response, body) => {
  console.log(JSON.stringify(error, undefined, 2)) //shows JSON error in detail
  console.log(JSON.stringify(body, undefined, 2)) //shows JSON body in detail
  console.log(`Address: ${body.results[1].formatted_address}`)
  console.log(`Lat: ${body.results[0].geometry.location.lat} & Lng: ${body.results[0].geometry.location.lng}`)
})



/* Request callback includes 3 arguments: once the url is recieved, the callback response includes:
Error: errors made during HTTP request - ex address incorrect, machine doesn't have access
response: entire response object, including uri, headers, method, body
Body: the body of json data returned by Google API

Headers: sent from Google API server to Node server, accepting application/JSON
Request: uri object includes protocol (https), port, hostname
StatusCode: HTTP errors ex 200

*/
