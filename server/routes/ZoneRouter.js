const Router = require('express')
const router = new Router()
const ZoneController = require('../controllers/ZoneController')

router.post('/create', CheckRole('ADMIN'), ZoneController.create)
router.get('/check', ZoneController.getAll)
router.post('/delete', CheckRole('ADMIN'), ZoneController.delete)

module.exports = router