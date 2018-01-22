const yargs = require('yargs') //used to build interactive command line tools
const axios = require('axios')

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

var encodedAddress = encodeURIComponent(argv.address)
geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCr9jxyudzQS03YhkjELuLSB0kKfREomi8&address=${encodedAddress}`

axios.get(geocodeURL).then((res)=> {
  if (res.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address')
  }
  var lat = res.data.results[0].geometry.location.lat;
  var lng = res.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/48855f5d4c031cbcf4b873fd2e97c61a/${lat},${lng}?units=si`
console.log(res.data.results[0].formatted_address)
console.log(`Located at lat ${res.data.results[0].geometry.location.lat} & lng: ${res.data.results[0].geometry.location.lng}`)
  // console.log('res.data: ', res.data)
  // console.log('res.data.results', res.data.results)
  // console.log('res.data.results[0]', res.data.results[0])
  return axios.get(weatherURL)
}).then((res) => {
  var temp = res.data.currently.temperature;
  var apparentTemp = res.data.currently.apparentTemperature;

  console.log(`It's currently ${temp}, and feels like ${apparentTemp}`)
}).catch((e) => {
  if (e.code === 'ENOTFOUND'){
    console.log('unable to connect to API servers')
  } else {
    console.log(e.message) //shows the 'throw new error' msg
  }
})

/* Here we are using axios to chain promises, which we access using .then
- Use axio.get to request geocode url injecting arg.address from the command line
- The request retrieves and stores lat & lng, which is injected into weather url
- Then we return another promise when making request to weather url
- From our request we retrieve temp and apparentTemp for the address
- If any errors are thrown during either promise, catch will be fired & print error msg

- throw new error: tells node to stop process

*/
