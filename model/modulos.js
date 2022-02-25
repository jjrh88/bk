
const mongoose = require('mongoose')
    
const moduloSchema = new mongoose.Schema
({
    modulo: { type: String, lowercase: true }, 
    url: String,
    submodulos:[
      { name: String ,
        opciones: [
            { name: String }
        ]
      }  
    ]
})

module.exports =  mongoose.model('modulos', moduloSchema )
// acciones: Ejecutar, Visualizar, Aprobar