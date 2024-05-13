const Router = require('express')
const router = new Router()
const SpecInfoController = require('../controllers/SpecInfoController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), SpecInfoController.create)
router.get('/check', SpecInfoController.getAll)
router.get('/check/:id', CheckRole('ADMIN'), SpecInfoController.getOne)
router.post('/delete/:id', CheckRole('ADMIN'), SpecInfoController.delete)

module.exports = router