const Router = require('express')
const router = new Router()
const InfoController = require('../controllers/InfoController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), InfoController.create)
router.get('/check', InfoController.getAll)

module.exports = router