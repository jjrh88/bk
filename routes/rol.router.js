const express = require('express'),
    router =  express.Router(),
    rolCtrl = require('../controller/rol.auth.controller')

router.get('/:rname', rolCtrl.getByName)

module.exports = router