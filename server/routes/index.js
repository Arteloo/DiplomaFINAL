const Router = require('express')
const router = new Router()
const MachineRouter = require('./MachineRouter')
const ZoneRouter = require('./ZoneRouter')
const DeveloperRouter = require('./DeveloperRouter')
const RefractoriesRouter = require('./RefractoriesRouter')
const UserRouter = require('./UserRouter')

router.use('/users', UserRouter)
router.use('/Machines', MachineRouter)
router.use('/Zones', ZoneRouter)
router.use('/Refractories', RefractoriesRouter)
router.use('/Developers', DeveloperRouter)

module.exports = router