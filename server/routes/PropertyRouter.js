const Router = require('express')
const router = new Router()
const PropertyController = require('../controllers/PropertyController')

router.post('/create', PropertyController.create)
router.get('/check', PropertyController.getAll)
router.post('/delete', PropertyController.delete)

module.exports = router