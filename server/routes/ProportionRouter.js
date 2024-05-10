const Router = require('express')
const router = new Router()
const ProportionController = require('../controllers/ProportionController')

router.post('/create', ProportionController.create)
router.get('/check', ProportionController.getAll)
router.post('/delete', ProportionController.delete)

module.exports = router