const User = require('../model/user')


exports.createUser = () =>{
    let user = new User
    ({
        user: "admin",
        password: "admin"
    })
    user.save()   
}