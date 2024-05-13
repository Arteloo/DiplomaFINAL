const Router = require('express')
const router = new Router()
const DeveloperController = require('../controllers/DeveloperController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), DeveloperController.create)
router.get('/check', DeveloperController.getAll)
router.get('/check/:id', CheckRole('ADMIN'), DeveloperController.getOne)
router.post('/delete/:id', CheckRole('ADMIN'), DeveloperController.delete)

module.exports = router