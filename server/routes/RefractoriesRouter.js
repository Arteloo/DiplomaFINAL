const Router = require('express')
const router = new Router()
const RefractoriesController = require('../controllers/RefractoriesController')

router.post('/create', RefractoriesController.create)
router.get('/getall', RefractoriesController.getAll)
router.get('/:id', RefractoriesController.getOne)
router.post('/delete', RefractoriesController.delete)

module.exports = router
