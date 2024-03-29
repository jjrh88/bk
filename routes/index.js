const { Router } = require('express'),
    router = Router()

router.use('/contact', require('../routes/contact.route'))
router.use('/upload', require('../routes/document.routes'))
router.use('/auth', require('../routes/auth.route'))
router.use('/rol', require('../routes/rol.router'))


module.exports = router