const Router = require('express')
const router = new Router()
const PropertyController = require('../controllers/PropertyController')

router.post('/create', CheckRole('ADMIN'), PropertyController.create)
router.get('/check', PropertyController.getAll)
router.post('/delete', CheckRole('ADMIN'), PropertyController.delete)

module.exports = router