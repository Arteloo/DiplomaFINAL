const {SpecInfo} = require('../models/models')
const ApiError = require("../error/ApiError")

class SpecInfoController {
    async create(req, res) {
        const {Spec} = req.body
        const addSpec = await SpecInfo.create({Spec})
        return res.json(addSpec)
    }
    async getAll(req, res, next) {
        const names = await SpecInfo.findAll()
        return res.json(names)
    }
    async getOne(req, res) {
        const {id} = req.params
        const Spec = await SpecInfo.findOne(
            {
                where: {id}
            }
        )
        return res.json(Spec)
    }
    async updateOne(req, res, next) {
        const {id} = req.params
        const {Spec} = req.body
        const SpecUp = await SpecInfo.findOne({where: {id}})
       
        if (Spec) {
            SpecUp.Spec = Spec
        } 
        SpecUp.save()
        return res.json({message: 'Запись свойств обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await SpecInfo.destroy({where: {id}})
        return res.json({message: 'Указанный пункт свойств удален'})
    }

}

module.exports = new SpecInfoController()