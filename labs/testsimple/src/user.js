const create = (user) => { //user is an object
    if (!user.username || !user.email) { //elements in object
        return 'error'
    }

    // Save in DB
    // saveUser(username, email, fullName)
    return 'ok'
}

// var testUser = {
//     email: 'gonzaloetjo@gmail.com'
// }
// const result = user.create(testuser)

// console.log(result)

module.exports = {
    create: create
}
