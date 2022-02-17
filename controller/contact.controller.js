const { send } = require('express/lib/response')
const contact = require('../model/contact')

/*
 1. Registre en base de datos la información.
 2. Envie un email notificando que en un tiempo estimado se le dara respuesta.
 3. Colas - RabbitMq 
 4. Notificar en tiempo real, que nos estan contactando. socketio
 5. Reddis - cached
 6. Service Workers - nodejs y angular
*/
const ctrlContact = {}
   Contact = require('../model/contact')
   mail = require('../service/mail')
   sendMQ = require('../service/send')

//post
ctrlContact.create = async(req, res) =>{
    //desestructuracion}
    const { name, email, subject, message } = req.body
    const newContact = new Contact({
        name: name,
        email: email,
        subject : subject,
        message : message
    })
    await newContact.save()

    //sendMQ.sendToNewQueue("contact", email)
    //mail.sendMailContact( req.body )
    res.json({ status: true })
}

ctrlContact.get = async(req, res) =>{
   const contacts = await Contact.find({})
   res.json(contacts)
}

ctrlContact.findById = async(req, res) =>{
    console.log( req.params._id )
    const contact = await Contact.find({ _id: req.params._id})
    res.json(contact)
}

ctrlContact.remove = async(req, res) =>{
    console.log(req.params._id);
    await Contact.deleteOne({ _id: req.params._id })
    res.json({ status: true})
}

ctrlContact.update = async (req, res) => {
    console.log( req.body  )
    const {_id, name, email, subject, message } = req.body 
    let toUpdate = {name:name, email: email, subject: subject, message: message}
    await Contact.findOneAndUpdate({_id:_id}, toUpdate, { new: true } )
    res.json({status: true})
 }

 ctrlContact.search = async(req, res)=>{
     const { name } = req.body
    const contact = await Contact.find({ name : { $regex: ".*" + name + ".*" } })
    res.json(contact)
 }


module.exports = ctrlContact