const {Developers} = require('../models/models')
class DeveloperController {
    async create(req, res) {
        const {Name, link, INN, OGRN, phone} = req.body
        const RefraPropCreate = await Developers.create({Name, link, INN, OGRN, phone})
        return res.json(RefraPropCreate)
    }
    async getAll(req, res, next) {
        const DevsAll = await Developers.findAll()
        return res.json(DevsAll)
    }
    async delete(req, res) {
        
    }
}

module.exports = new DeveloperController()