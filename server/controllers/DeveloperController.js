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
    async updateOne(req, res, next) {
        const {id} = req.params
        const {Name, link, INN, OGRN, phone} = req.body
        const DevUp = await Developers.findOne({where: {id}})
        for (let i=0; i < 4; i++) {
        if (Name) {
            DevUp.Name = Name
        } 
        if (link) {
            DevUp.link = link
        } 
        if (INN) {
            DevUp.INN = INN
        }
        if (OGRN) {
            DevUp.OGRN = OGRN
        }
        if (phone) {
            DevUp.phone = phone
        } 
    }
        DevUp.save()
        return res.json({message: 'Запись производителя обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await Developers.destroy({where: {id}})
        return res.json({message: 'Указанный производитель удален'})
    }
}

module.exports = new DeveloperController()