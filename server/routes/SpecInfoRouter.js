const Router = require('express')
const router = new Router()
const SpecInfoController = require('../controllers/SpecInfoController')

router.post('/create', SpecInfoController.create)
router.get('/check', SpecInfoController.getAll)

module.exports = router