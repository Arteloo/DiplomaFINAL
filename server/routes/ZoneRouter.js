const Router = require('express')
const router = new Router()
const ZoneController = require('../controllers/ZoneController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), ZoneController.create)
router.get('/check', ZoneController.getAll)
router.get('/check/:id', CheckRole('ADMIN'), ZoneController.getOne)
router.post('/delete/:id', CheckRole('ADMIN'), ZoneController.delete)

module.exports = router