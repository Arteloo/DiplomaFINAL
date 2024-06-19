const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')
const CheckRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.get('/check', UserController.getAll)
router.put('/update/:id', CheckRole('ADMIN'), UserController.update)
router.post('/delete/:id', CheckRole('ADMIN'), UserController.delete)

module.exports = router