const express = require('express'),
    router =  express.Router(),
    authCtrl = require('../controller/auth.controller')

router.post('/', authCtrl.signIn)

module.exports = router