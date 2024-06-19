const Router = require('express')
const router = new Router()
const RefractoriesController = require('../controllers/RefractoriesController')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/create', CheckRole('ADMIN'), RefractoriesController.create)
router.get('/check', RefractoriesController.getAll)
router.get('/search', RefractoriesController.search)
router.get('/check/:id', RefractoriesController.getOne)
router.put('/update/:id', CheckRole('ADMIN'), RefractoriesController.updateOne)
router.post('/delete/:id', CheckRole('ADMIN'), RefractoriesController.delete)

module.exports = router
