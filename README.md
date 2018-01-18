This project is to demonstrate the following node concepts:
1) Making HTTP requests, and responding with a callback
2) Abstracting callbacks into separate module functions
3) Making dynamic searches by inserting parameters into url for HTTP request


4) Chain callbacks together in app-chain-callbacks.js:
    -geocode provide dynamic coordinates for weather search
    -If succes, geocode results give address, lat and lng
    -within callback for geocodeAddress, if success then getWeather is called with lat, lng passed in as args and callback consisting of error or weatherRes.  
    -if args give results, the temperature & apparentTemperature are logged
