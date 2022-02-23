const express = require('express'),
    router =  express.Router(),
    documentCtrl = require('../controller/document.controller')


router.post('/upload', documentCtrl.upload)
router.post('/download', documentCtrl.download)

module.exports = router