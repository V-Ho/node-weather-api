
//EXAMPLE 1
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Promise fulfilled yay!')
//     // resolve() //this never gets called, can only be resolved once!
//     reject('cannot fulfill promise!')
//   }, 2500)
// })
//
// somePromise.then((message) => {
//   console.log('Sucess: ', message);
// }, (errorMsg) => {
//   console.log('Error:', errorMsg);
// })
//
// /* Promise function called with 2 arguments: resolve & reject,
//
// - Here we call resolve to give 'promise success' message
// - Call somePromise.then that has 2 functions:
//     -print msg if promise resolved
//     -print errorMsg if promise rejected
// - While promise is being processed it is 'pending'
//
//
// - Good practise to set resolve/reject to an object that you can set multiple properties on
//
// Callback: functions fire no matter what
// Promise: can call functions depending on whether promise is fulfilled or rejected
//   => much less complicated that if/else/elseif statements during callback
//   => promise can only be resolved or rejected once, whereas callbacks can be called
//   accidentally over again.  Ex. resolve() only works once within promise
// */

//EXAMPLE 2
var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if (typeof a === 'number' && typeof b ==='number') {
        resolve(a + b)
      } else {
        reject('these are not numbers')
      }
    }, 1500)
  })
}

asyncAdd(4,11).then((res) => {
  console.log('Result:', res)
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Chained Result: ', res)
}).catch((errorMsg) => {
  console.log('Chained Error: ', errorMsg)
})
//Result: 15
//Chained Result: 48

/* asyncAdd takes 2 args, checks if they are numbers, if yes returns a promise

Chaining Promises: we can chain promises together with additional return statement and
call with additional .then
- We chain promise to initial asyncAdd by adding 33, then print the new result.
- Instead of having an error handler for each promise, we can catch all errors with .catch
*/
