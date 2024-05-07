const Router = require('express')
const router = new Router()
const MachineController = require('../controllers/MachineController')

router.post('/create', MachineController.create)
router.get('/check', MachineController.getAll)
router.post('/delete', MachineController.delete)

module.exports = router