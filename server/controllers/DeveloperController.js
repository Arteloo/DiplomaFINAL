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
    async getOne(req, res, next) {
        const {id} = req.params
        const DevOne = await Developers.findOne(
            {
                where: {id}
            }
        )
        return res.json(DevOne)
    }
    async delete(req, res) {
        const {id} = req.params
        await Developers.destroy({where: {id}})
        return res.json({message: 'Указанный производитель удален'})
    }
}

module.exports = new DeveloperController()