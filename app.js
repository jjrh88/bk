const express = require('express'),
    app = express()
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http').Server(app)
    io = require("socket.io")(http)
    config = require('./config/config')
    db = require('./database/database')
    consumer = require('./io/consumer')
   
consumer.start(io)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../bk/routes/'))

http.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
});