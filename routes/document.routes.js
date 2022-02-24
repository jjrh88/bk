const express = require('express'),
    router =  express.Router(),
    documentCtrl = require('../controller/document.controller')


router.post('/', documentCtrl.upload)
router.post('/', documentCtrl.download)

module.exports = router