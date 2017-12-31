console.log('Starting App')

setTimeout(() => {
  console.log('inside of callback')
}, 2000)
//setTimeout takes 2 arguments: callback function & # of milleseconds

setTimeout(() => {
  console.log('second setTimeout')
}, 0)

console.log('Finishing Up')

// Terminal:
// Starting App
// Finishing Up
// second setTimeout
// inside of callback
