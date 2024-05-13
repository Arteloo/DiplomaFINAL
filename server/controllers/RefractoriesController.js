const uuid = require('uuid')
const path = require('path')
const {Refractories, Apparat} = require('../models/models')
const ApiError = require('../error/ApiError')

class RefractoriesController {
    async create(req, res, next) {
        try {
            const {name, ProportionId, PropertyId, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const Material = await Refractories.create({name, ProportionId, PropertyId, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId, img: fileName})
            return res.json(Material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {MachineId, ZoneId, SpecialInfoId, InfoId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let MaterialsSearch
        if (!MachineId && !ZoneId && !InfoId && !SpecialInfoId) {
            MaterialsSearch = await Refractories.findAndCountAll({limit, offset})
        }
        if (MachineId && ZoneId && InfoId && SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {MachineId, ZoneId, InfoId, SpecialInfoId}, limit, offset})
        }
        //Тройки - отсутствует один параметр из указанных
        if (!MachineId && ZoneId && InfoId && SpecialInfoId) { 
            MaterialsSearch = await Refractories.findAll({where: {ZoneId, InfoId, SpecialInfoId}, limit, offset})
        }
        if (MachineId && !ZoneId && InfoId && SpecialInfoId) { 
            MaterialsSearch = await Refractories.findAll({where: {MachineId, InfoId, SpecialInfoId}, limit, offset})
        }
        if (MachineId && ZoneId && !InfoId && SpecialInfoId) { 
            MaterialsSearch = await Refractories.findAll({where: {MachineId, ZoneId, SpecialInfoId}, limit, offset})
        }
        if (MachineId && ZoneId && InfoId && !SpecialInfoId) { 
            MaterialsSearch = await Refractories.findAll({where: {MachineId, ZoneId, InfoId}, limit, offset}) 
    }
        return res.json(MaterialsSearch)
    }
    async getOne(req, res) {
        const {id} = req.params
        const Material = await Refractories.findOne(
            {
                where: {id}
            }
        )
        return res.json(Material)
    }
    async delete(req, res) {
        const {id} = req.params
        await Refractories.destroy({where: {id}})
        return res.json({message: 'Указанный огнеупор удален'})
    }
}

module.exports = new RefractoriesController()