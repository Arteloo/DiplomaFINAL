const {Zone, MachineZoneRef, Machine} = require('../models/models')
const ApiError = require("../error/ApiError")
class ZoneController {
    async create(req, res, next) {
        const {name, MachineId} = req.body
        if (!MachineId) {
            return next(ApiError.badRequest('Не указан тепловой агрегат, к которому принадлежит зона футеровки'))
        }
        const createZone = await Zone.create({name})
        const {id} = createZone
        const createApparat = await MachineZoneRef.create({MachineId: MachineId, ZoneId: id})
        return res.json(createZone)
    }
    async getAll(req, res) {
        const allZones = await Zone.findAll()
        return res.json(allZones)
    }
    async getOne(req, res) {
        const {id} = req.params
        const Zonus = await Zone.findOne(
            {
                where: {id}, include: MachineZoneRef
            }
        )
        const {MachineRefs: [{MachineId}]} = Zonus
        const MachUsed = await Machine.findOne({where: MachineId})
        const {name} = MachUsed
        return res.json([Zonus, name])
    }
    async updateOne(req, res, next) {
        const {id} = req.params
        let {name} = req.body
        const ZoneUp = await Zone.findOne({where: {id}})
        ZoneUp.name = name
        await ZoneUp.save()
        return res.json({message: 'Зона футеровки обновлена'})
    }

    async delete(req, res) {
        const {id} = req.params
        await Zone.destroy({where: {id}})
        return res.json({message: 'Указанная зона футеровки удалена'})
    }
}

module.exports = new ZoneController()