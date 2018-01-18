const request = require('request')

exports.getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/48855f5d4c031cbcf4b873fd2e97c61a/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
    callback( undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature })
    } else {
      callback('unable to connect to server')
    }
  })
}

// If not error, we want to print the result object as a callback
// Results object contains current and apparent temperature
