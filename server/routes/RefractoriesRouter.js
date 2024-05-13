const Router = require('express')
const router = new Router()
const RefractoriesController = require('../controllers/RefractoriesController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), RefractoriesController.create)
router.get('/check', RefractoriesController.getAll)
router.get('/:id', RefractoriesController.getOne)
router.post('/update/:id', CheckRole('ADMIN'), RefractoriesController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), RefractoriesController.delete)

module.exports = router
