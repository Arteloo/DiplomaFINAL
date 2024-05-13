const uuid = require('uuid')
const path = require('path')
const {Refractories, Apparat, Proportions, Properties, Info, SpecInfo, Developers, Machine, Zone} = require('../models/models')
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
            MaterialsSearch = await Refractories.findAll({where: {MachineId, ZoneId, InfoId}, limit, offset})} 
        
        //Двойки-  отсутствуют два параметра из указанных
        if (MachineId && ZoneId && !InfoId && !SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {MachineId, ZoneId}, limit, offset})
        }
        if (MachineId && !ZoneId && InfoId && !SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {MachineId,  InfoId}, limit, offset})
        }
        if (MachineId && !ZoneId && !InfoId && SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {MachineId, SpecialInfoId}, limit, offset})
        }
        if (!MachineId && ZoneId && InfoId && !SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {ZoneId, InfoId}, limit, offset})
        }
        if (!MachineId && ZoneId && !InfoId && SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {ZoneId, SpecialInfoId}, limit, offset})
        }
        if (!MachineId && !ZoneId && InfoId && SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({where: {InfoId, SpecialInfoId}, limit, offset})
        }
        //единицы - отсутствует один параметр 
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
    async updateOne(req, res, next) {
        const {id} = req.params
        const {name, ProportionId, PropertyId, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId} = req.body
        //const {img} = req.files
        const RefUp = await Refractories.findOne({where: {id}})
        for (let i=0; i < 5; i++) {
        if (name) {
           RefUp.name = name
        } 
        if (ProportionId) {
            const checkProp = await Proportions.findOne({where: {id: ProportionId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.ProportionId = ProportionId
         } 
         if (PropertyId) {
            const checkProp = await Properties.findOne({where: {id: PropertyId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.PropertyId = PropertyId
         } 
         if (InfoId) {
            const checkProp = await Info.findOne({where: {id: InfoId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.InfoId = InfoId
         } 
         if (SpecialInfoId) {
            const checkProp = await SpecInfo.findOne({where: {id: SpecialInfoId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.SpecialInfoId = SpecialInfoId
         } 
         if (DeveloperId) {
            const checkProp = await Developers.findOne({where: {id: DeveloperId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.DeveloperId = DeveloperId
         }
         if (MachineId) {
            const checkProp = await Machine.findOne({where: {id: MachineId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.MachineId = MachineId
         }
         if (ZoneId) {
            const checkProp = await Zone.findOne({where: {id: ZoneId}})
            if (!checkProp) {
                return next(ApiError.badRequest('Некорректный запрос'))
            }
            RefUp.ZoneId = ZoneId
         }
    }
        RefUp.save()
        return res.json({message: 'Запись свойств обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await Refractories.destroy({where: {id}})
        return res.json({message: 'Указанный огнеупор удален'})
    }
}

module.exports = new RefractoriesController()