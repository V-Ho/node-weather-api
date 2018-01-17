const request = require('request')

exports.getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/48855f5d4c031cbcf4b873fd2e97c61a/43.448972,-80.5585481?units=si',
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
    console.log('TEMP', body.currently.temperature)
    }
    else {
      console.log(`Error: ${error}, unable to connect to server`)
    }

  })
}
