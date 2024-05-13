const Router = require('express')
const router = new Router()
const SpecInfoController = require('../controllers/SpecInfoController')

router.post('/create', CheckRole('ADMIN'), SpecInfoController.create)
router.get('/check', SpecInfoController.getAll)

module.exports = router