const mongoose = require('mongoose') 

const documentSchema = new mongoose.Schema
({
    originalname: String,
    encoding: String,
    mimetype: String,
    filename: String,
    size: Number
})

module.exports =  mongoose.model('document', documentSchema )
