var makeUser = ((id, callback) => {
  var user = {
    id: id,
    name: 'vho',
    color: 'blue'
  }
  setTimeout(() => {
    callback(user)
  }, 2000)
})

makeUser = (234, (user) => {
  console.log(user)
})
