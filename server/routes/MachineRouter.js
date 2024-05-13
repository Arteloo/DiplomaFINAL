const Router = require('express')
const router = new Router()
const MachineController = require('../controllers/MachineController')

router.post('/create', CheckRole('ADMIN'), MachineController.create)
router.get('/check', MachineController.getAll)
router.post('/delete', CheckRole('ADMIN'), MachineController.delete)

module.exports = router