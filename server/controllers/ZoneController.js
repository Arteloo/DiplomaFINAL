const {Zone} = require('../models/models')
const ApiError = require("../error/ApiError")
class ZoneController {
    async create(req, res) {
        const {name} = req.body
        const createZone = await Zone.create({name})
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
                where: {id}
            }
        )
        return res.json(Zonus)
    }
    async delete(req, res) {
        const {id} = req.params
        await Zone.destroy({where: {id}})
        return res.json({message: 'Указанная зона футеровки удалена'})
    }
}

module.exports = new ZoneController()