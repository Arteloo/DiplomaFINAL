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
    async delete(req, res) {
        
    }
}

module.exports = new ZoneController()