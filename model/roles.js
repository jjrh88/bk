const mongoose = require('mongoose') 

const rolesSchema = new mongoose.Schema
({
    name: { type: String, lowercase: true }, 
})

module.exports =  mongoose.model('roles', rolesSchema )