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
  console.log(res.data)
})

//axios gets URL and returns a promise
