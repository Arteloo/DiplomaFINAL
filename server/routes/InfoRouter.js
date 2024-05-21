const Router = require('express')
const router = new Router()
const InfoController = require('../controllers/InfoController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), InfoController.create)
router.get('/check', InfoController.getAll)
router.get('/check/:id', InfoController.getOne)
router.post('/update/:id', CheckRole('ADMIN'), InfoController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), InfoController.delete)

module.exports = router