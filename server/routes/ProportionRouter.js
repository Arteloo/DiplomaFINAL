const Router = require('express')
const router = new Router()
const ProportionController = require('../controllers/ProportionController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), ProportionController.create)
router.get('/check', ProportionController.getAll)
router.get('/check/:id', ProportionController.getOne)
router.post('/update/:id', CheckRole('ADMIN'), ProportionController.updateOne)
router.post('/delete:id', CheckRole('ADMIN'), ProportionController.delete)

module.exports = router