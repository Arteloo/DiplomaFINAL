const Router = require('express')
const router = new Router()
const InfoController = require('../controllers/InfoController')

router.post('/create', InfoController.create)
router.get('/check', InfoController.getAll)

module.exports = router