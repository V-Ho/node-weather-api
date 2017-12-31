//get user from db passing in id
var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'vho'
  }
  setTimeout(() => {
    callback(user)
  }, 3000)

}

//call getUser with id and user object
getUser(234, (userObject) => {
  console.log(userObject)
})


/* Callback: a function that gets passed in as an argument
to another function, and is executed when the second argument/event
takes place
*/
