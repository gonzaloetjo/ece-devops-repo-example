const db = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    // TODO check if user already exists
    // If an error occurs, err will contain information about the error, 
    // and result will typically be null or undefined.
    // If the operation is successful, err will be null and result will contain the 
    // data you're interested in.
    db.hmset(user.username, userObj, (err, res) => {  // Using Redis' HMSET command
      if (err) return callback(err, null)   // If there's an error, return the error through the provided callback.
      callback(null, res)                   // Otherwise, return the result of the operation through the provided callback.
    });
  },
  // get: (username, callback) => {
  //   // TODO create this method
  // }
}
