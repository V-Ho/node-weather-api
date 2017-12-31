const request = require('request')

//request takes 2 arguments: options object (ex maps data) & callback function
//options object: unique url property & json property
//callback: after url reached, then we call (error, response, body)
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=8%20bilderdijkpark%20amsterdam',
  json: true  //data recieved as jsons
}, (error, response, body) => {
  console.log('printing body', body)
})
