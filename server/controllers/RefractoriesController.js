const uuid = require('uuid')
const path = require('path')
const {Refractories} = require('../models/models')
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
        
    }
    async getOne(req, res) {
        
    }
    async delete(req, res) {
        
    }
}

module.exports = new RefractoriesController()