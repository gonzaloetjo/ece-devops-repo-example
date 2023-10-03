const user = require('../src/user')
// Here, you're importing the assert module from Node.js. 
// This module provides a simple set of assertion tests that can be used with any testing framework.
var assert = require('assert');

// The describe function is provided by Mocha. It's used to group related tests. 
// The first argument is a string that describes what you're testing (in this case, 'Array'). 
// The second argument is a callback function containing the tests or more nested describe blocks. 
// The description here helps in reporting and makes it easier to identify what is being tested.
describe('Array', function () { 
    // This is another describe block nested within the first. It's being used to further categorize the tests. 
    // In this case, it's focusing on the indexOf() method of the Array object. 
    // This nesting helps in organizing tests and also improves the clarity of test reports.
  describe('#indexOf()', function () {
// The it function is another Mocha-provided function. 
// It defines a single test. The first argument is a string describing what the test should do (it's an expectation). 
// The second argument is a callback function that contains the actual test code.
    it('should return -1 when the value is not present', function () {
// This assertion checks that the result of calling indexOf(4) on the array [1, 2, 3] is -1 (indicating the value 4 is not in the array). 
// If the result is not -1, the test will fail.
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

console.log("check the equality",[1, 2, 3].indexOf(4), -1)

// Test wrong email. Wrong username. Expect: error = success test
console.log('-- Wrong email --')
var testUser = {
    username: 'Gonzalo'
}


// Test wrong username
console.log('-- Wrong username --')
var testUser = {
    email: 'gonzaloetjo@gmail.com'
}


// Test succesful
console.log('-- Correct username and email ! --')

var testUser = {
    username: 'gonzalo',
    email: 'gonzaloetjo@gmail.com'
}
