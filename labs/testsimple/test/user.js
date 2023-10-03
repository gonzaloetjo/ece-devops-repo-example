const user = require('../src/user')

// Test wrong email. Expect: error = success test
console.log('-- Wrong email --')
var testUser = {
    username: 'gonzalo'
}
if(user.create(testUser) == 'error'){
    console.log('Test is passing')
} else {
    console.log('Test is not passing')
}

// Test wrong username. Expect: error = test succeds
console.log('-- Wrong username --')
var testUser = {
    email: 'gonzaloetjo@gmail.com'
}
if(user.create(testUser) == 'error'){
    console.log('Test is passing')
} else {
    console.log('Test is not passing')
}

// Test succesful. Expect success = succes of the test
console.log('-- Correct username and email ! --')

var testUser = {
    username: 'Gonzalo',
    email: 'gonzaloetjo@gmail.com'
}
if(user.create(testUser) == 'ok'){
    console.log('Test is passing')
} else {
    console.log('Test is not passing')
}
