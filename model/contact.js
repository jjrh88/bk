const mongoose = require('mongoose') //libreria u orm para conectarnos con mongodb y hacer consultas,
    
//definición del esquema
const contactSchema = new mongoose.Schema
({
    name: { type: String, lowercase: true }, 
    email: String,
    subject : String,
    message : String
})

module.exports =  mongoose.model('contact', contactSchema )