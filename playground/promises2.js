// var vhopromise = new Promise((resolve, reject) => {
//   // resolve('yay promises')
//   reject('boo no promise!')
// })
//
// vhopromise.then((resolvedMsg) => {
//   console.log(resolvedMsg)
// }, (rejectedMsg) => {
//   console.log(rejectedMsg)
// })

var vhocats = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('you get a cat!')
    reject('no cat for you!')
  }, 3000)
})

vhocats.then((yayCats) => {
  console.log(yayCats)
}, (noCats) => {
  console.log(noCats)
})

// no cat for you!
