
const mongoose = require('mongoose')
    
const rolUserSchema = new mongoose.Schema
({
    rol: String,
    userId: String
})

module.exports =  mongoose.model('roluser', rolUserSchema )