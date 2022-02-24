
const mongoose = require('mongoose')
    
const assignedToRolModuleSchema = new mongoose.Schema
({
    rol: String,
    modulo: [
     { name: String }
    ]
})

module.exports =  mongoose.model('assignedToRolModule', assignedToRolModuleSchema )