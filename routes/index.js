const { Router } = require('express'),
    router = Router()

router.use('/contact', require('../routes/contact.route'))

module.exports = router