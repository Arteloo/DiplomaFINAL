const Router = require('express')
const router = new Router()
const PropertyController = require('../controllers/PropertyController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), PropertyController.create)
router.get('/check', PropertyController.getAll)
router.get('/check/:id', CheckRole('ADMIN'), PropertyController.getOne)
router.post('/update/:id', CheckRole('ADMIN'), PropertyController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), PropertyController.delete)

module.exports = router