const user = require('../src/user')
var assert = require('assert');


describe('User', function () {
  describe('Create', function () {
    it('return an error when wrong username', function () {
      var testUser = {
        email: 'gonzaloetjo@gmail.com'
      }
      assert.equal(user.create(testUser), 'error')
    });
  });

  describe('Create', function () {
    it('return an error when wrong email', function () {
      var testUser = {
        username: 'gonzalo'
      }
      assert.equal(user.create(testUser), 'error')
    });
  });

  describe('Create', function () {
    it('return an ok when correct username and correct email', function () {
      var testUser = {
        username: 'gonzalo',
        email: 'gonzaloetjo@gmail.com'
      }
      assert.equal(user.create(testUser), 'ok')
    });
  });
});

