"use strict";

const nodemailer = require("nodemailer"),
      smtpTransport = require('nodemailer-smtp-transport'),
      config = require('../config/config')

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  tls:{
    rejectUnauthorized: false
  },
  auth: {
    user: config.user,
    pass: config.pwd
  }
}));

exports.sendMailContact =  function(data)
{
    let htmlCustom = `<ul>
                        <li>${data.name}</li>
                        <li>${data.email}</li>
                        <li>${data.subject}</li>
                        </ul>
                        <p> ${data.message} </p>
                        ` 
    let mailOptions = 
    {
        from: 'codebydevs@gmail.com',
        to: data.email,
        subject: 'Notificación de contacto ',
        html: htmlCustom
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) 
        console.log(error);
        else 
        console.log('Email sent: ' + info.response);
    })  

}