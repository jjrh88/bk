const express = require('express'),
    router =  express.Router(),
    contactCtrl = require('../controller/contact.controller')

router.get('/', contactCtrl.get)
router.post('/', contactCtrl.create)
router.post('/findById', contactCtrl.findById)
router.post('/search', contactCtrl.search)
router.get('/search', contactCtrl.search)
router.put('/', contactCtrl.update)
router.get('/:_id', contactCtrl.findById)
router.delete('/:_id', contactCtrl.remove)

module.exports = router