const Router = require('express')
const router = new Router()
const ProportionController = require('../controllers/ProportionController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), ProportionController.create)
router.get('/check', ProportionController.getAll)
router.get('/check/:id', CheckRole('ADMIN'), ProportionController.getOne)
router.post('/delete:id', CheckRole('ADMIN'), ProportionController.delete)

module.exports = router