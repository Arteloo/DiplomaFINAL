const Router = require('express')
const router = new Router()
const ZoneController = require('../controllers/ZoneController')

router.post('/create', ZoneController.create)
router.get('/getall', ZoneController.getAll)
router.post('/delete', ZoneController.delete)

module.exports = router