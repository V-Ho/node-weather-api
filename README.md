This project is to demonstrate the following node concepts:

In app.js:
1) Use yargs to enable entering command-line options
3) Making HTTP requests and respond with a callback
4) Abstracting callbacks into separate module functions to get geocode & weather
5) Making dynamic searches by inserting parameters into url for HTTP request

In app-chain-callbacks.js:
6) Chain callbacks together
    -geocodes provide dynamic coordinates for weather search
    -If succes, geocode results give address, lat and lng
    -within callback for geocodeAddress, if success then getWeather is called with lat, lng passed in as args and callback consisting of error or weatherRes.  
    -if args give results, the temperature & apparentTemperature are printed

In app-promise.js use axios to chain promises:
7) Use dynamic geocode url, injecting the encoded address from command-line
8) Use axios to fetch data from the geocodeURL, storing the lat & lng results
9) throw new Error to fire .catch and display errors if anything fails
during the chained promises
10) Make weatherURL dynamic by injecting the stored lat & lng variables
11) Use axios to fetch data from the weatherURL, storing temp and apparentTemp
as variables and then printing them to console
