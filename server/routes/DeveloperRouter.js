const Router = require('express')
const router = new Router()
const DeveloperController = require('../controllers/DeveloperController')

router.post('/create', DeveloperController.create)
router.get('/getall', DeveloperController.getAll)
router.post('/delete', DeveloperController.delete)

module.exports = router