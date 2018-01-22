const request = require('request')

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=${encodedAddress}`,
      json: true  //data recieved as jsons
    }, (error, response, body) => {
      if (body.status === 'OK') {
        resolve(
          console.log('Address: ', body.results[0].formatted_address),
          console.log('Lat: ', body.results[0].geometry.location.lat),
          console.log('Lng: ', body.results[0].geometry.location.lng)
        )
      } else if (body.status === 'ZERO_RESULTS') {
        reject(console.log('Unable to find that address'))
      } else {
        reject(console.log('Unable to connect to server'))
      }
    })
  })

}

geocodeAddress('000000000000').then((location) => {
  console.log('Result: ', location)
},( errorMsg) => {
    console.log('Error :', errorMsg)
})

/*
Here we take a library that does not support promises (Request),
and wrap our function calls inside of a promise
Want geocodeAddress


call geocodeAddress, passing in address and succces + error handler
-If successful, should give location with lat & lng
-If not, should give error message
-Change request to call resolve/reject promise instead of giving address then
firing callback


*/
