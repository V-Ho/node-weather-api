const request = require('request')

exports.getWeather = (lat, lng) => {
  request({
    url: `https://api.darksky.net/forecast/48855f5d4c031cbcf4b873fd2e97c61a/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
    console.log(`Temp is currently: ${body.currently.temperature}`)
    console.log(`Apparent time is: ${body.currently.apparentTemperature}`)
    }
    else {
      console.log(`Error: ${error}, unable to connect to server`)
    }

  })
}
