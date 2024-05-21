const Router = require('express')
const router = new Router()
const MachineController = require('../controllers/MachineController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), MachineController.create)
router.get('/check', MachineController.getAll)
router.get('/check/:id', MachineController.getOne)
router.post('/update/:id', CheckRole('ADMIN'), MachineController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), MachineController.delete)

module.exports = router