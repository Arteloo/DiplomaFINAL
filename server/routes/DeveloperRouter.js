const Router = require('express')
const router = new Router()
const DeveloperController = require('../controllers/DeveloperController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), DeveloperController.create)
router.get('/check', DeveloperController.getAll)
router.get('/check/:id', DeveloperController.getOne)
router.put('/update/:id', CheckRole('ADMIN'), DeveloperController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), DeveloperController.delete)

module.exports = router