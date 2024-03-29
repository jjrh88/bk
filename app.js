
const express = require('express')
    config = require('./config/config')
    multer = require('multer')
    path = require('path')
    fs = require('fs')
    GridFsStorage = require('multer-gridfs-storage')
    //upload = multer({ dest: 'uploads/' })
    app = express()
    bodyParser = require('body-parser')
    cors = require('cors')
    Document = require('./model/document')
    methodOverride = require('method-override')
    http = require('http').Server(app)
    io = require("socket.io")(http,{
        cors:{
            origins:['http://localhost:4200/']
        }
    })
    url = config.urlDb
    upload = multer({ dest: "/uploads" })
    dirPath = path.join(__dirname, '..', '/uploads')
    

    db = require('./database/database')
    consumer = require('./io/consumer')
   
    consumer.start(io)
    init = require('./init/init')
    //init.createRoles()
    //init.createUser()
    //init.createModules()
    //init.createAsignedModuleToRolUser()
    init.createRolUser()

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())
    app.use(methodOverride('_method'))
    

    app.use("/api", require('../bk/routes/'))
    
    app.post('/api/upload', upload.single('file'), async (req, res, next) => { 
        let newDocument = new Document({
            originalname: req.file.originalname,
            encoding: req.file.encoding,
            mimetype: req.file.mimetype,
            filename: req.file.filename,
            size: req.file.size
        })
        await newDocument.save()
        res.json({ status: true })
    })

    

    http.listen(config.port, () => {
        console.log(`Server is running in port ${config.port}`);
    });