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
  console.log(res.data)
}).catch((e) => {
  if (e.code === 'ENOTFOUND'){
    console.log('unable to connect to API servers')
  } else {
    console.log(e.message) //shows the 'throw new error' msg
  }
})

/* Here axios gets URL and returns a promise

- throw new error: tells node to stop process

*/
