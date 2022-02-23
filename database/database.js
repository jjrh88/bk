const mongoose = require('mongoose'),
      config = require('../config/config')
     
//conectarnos a la base de datos
mongoose.connect(config.urlDb)
 /*luego*/.then(db => console.log("Connect to DB"))
 /*si hay error*/.catch(err => console.log(err))

module.exports = mongoose

