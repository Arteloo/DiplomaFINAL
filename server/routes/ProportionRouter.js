const Router = require('express')
const router = new Router()
const ProportionController = require('../controllers/ProportionController')

router.post('/create', CheckRole('ADMIN'), ProportionController.create)
router.get('/check', ProportionController.getAll)
router.post('/delete', CheckRole('ADMIN'), ProportionController.delete)

module.exports = router