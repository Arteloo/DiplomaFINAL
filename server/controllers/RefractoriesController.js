const uuid = require('uuid')
const path = require('path')
const {Refractories, Proportions, Properties, Info, SpecInfo, Developers, Machine, Zone} = require('../models/models')
const {MachineZoneRef} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Sequelize } = require('../db')
const Op = Sequelize.Op;

class RefractoriesController {
    async create(req, res, next) {
            const {name, Al, Fe, Si, Zr, Ca, Mg, Cr, Cug, PressPoint, Refractorisity, Porosity, TKLR, Thermosity, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId} = req.body
            const {img} = req.files
            if(!Al || !Fe || !Si || !Zr || !Ca || !Mg || !Cr || !Cug) {
                next(ApiError.badRequest('Не указан состав материала'))
            }
            if(!PressPoint || !Refractorisity || !Porosity || !TKLR || !Thermosity) {
                next(ApiError.badRequest('Не указаны свойства материала'))
            }
            if(!name) {
                next(ApiError.badRequest('Не указано имя материала'))
            }
            if(!img) {
                next(ApiError.badRequest('Приложите изображение материала'))
            }
            const proports = await Proportions.create({Al, Fe, Si, Zr, Ca, Mg, Cr, Cug})
            const props = await Properties.create({PressPoint, Refractorisity, Porosity, TKLR, Thermosity})
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const Material = await Refractories.create({name, ProportionId: proports.id, PropertyId: props.id, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId, img: fileName})
            const machzoneref = await MachineZoneRef.create({MachineId: MachineId, ZoneId: ZoneId, RefractoryId: Material.id})
            return res.json(machzoneref)
    }
    async getAll(req, res) {
        let MaterialsSearch = await Refractories.findAll()
        return res.json(MaterialsSearch)
    }
    async search(req, res) {
        try {
            const {MachineId, ZoneId, InfoId, SpecialInfoId, maxRefractorisity, maxPressPoint, maxPorosity} = req.query
            // Проверка на наличие значений
             // Вывод параметров для отладки
        console.log("Parameters:", { MachineId, ZoneId, InfoId, SpecialInfoId, maxRefractorisity, maxPressPoint, maxPorosity});
        if (MachineId == null || ZoneId == null || InfoId == null || SpecialInfoId == null) {
            throw new Error("One or more parameters are missing or invalid");
        }
        const whereConditions = {};

        if (maxRefractorisity !== undefined) {
          whereConditions.Refractorisity = { [Op.lt]: maxRefractorisity };
        }
        if (maxPressPoint !== undefined) {
          whereConditions.PressPoint = { [Op.lt]: maxPressPoint };
        }
        if (maxPorosity !== undefined) {
          whereConditions.Porosity = { [Op.lt]: maxPorosity };
        }
        const refractories = await Refractories.findAll({
            include: [
              {
                model: MachineZoneRef,
                where: {
                  ...(MachineId !== undefined && { MachineId }),
                  ...(ZoneId !== undefined && { ZoneId })
                },
                include: [
                  { model: Machine },
                  { model: Zone }
                ]
              },
              {
                model: Info,
                where: {
                  ...(InfoId !== undefined && { id: InfoId })
                }
              },
              {
                model: SpecInfo,
                where: {
                  ...(SpecialInfoId !== undefined && { id: SpecialInfoId })
                }
              },
              {
                model: Properties,
                where: whereConditions
              },
              {
                model: Proportions
              }
            ]
          });
            return res.json(refractories);
        } catch (error) {
            console.error("Error finding refractories: ", error);
        }
    }
    async getOne(req, res) {
        const {id} = req.params
        const Material = await Refractories.findOne(
            {
                where: {id}, include: MachineZoneRef
            }
        )
        return res.json(Material)
    }

    async updateOne(req, res, next) {
        try {        
            const {name, Al, Fe, Si, Zr, Ca, Mg, Cr, Cug, PressPoint, Refractorisity, Porosity, TKLR, Thermosity, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId} = req.body
            const {img} = req.files
            if(!Al || !Fe || !Si || !Zr || !Ca || !Mg || !Cr || !Cug) {
                next(ApiError.badRequest('Не указан состав материала'))
            }
            if(!PressPoint || !Refractorisity || !Porosity || !TKLR || !Thermosity) {
                next(ApiError.badRequest('Не указаны свойства материала'))
            }
            if(!name) {
                next(ApiError.badRequest('Не указано имя материала'))
            }
            if(!img) {
                next(ApiError.badRequest('Приложите изображение материала'))
            }
            const proports = await Proportions.update({Al, Fe, Si, Zr, Ca, Mg, Cr, Cug}, {where: {id: req.params.id}})
            const props = await Properties.create({PressPoint, Refractorisity, Porosity, TKLR, Thermosity}, {where: {id: req.params.id}})
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const material = await Refractories.update({name, ProportionId: proports.id, PropertyId: props.id, InfoId, SpecialInfoId, DeveloperId, MachineId, ZoneId, img: fileName}, {where: {id: req.params.id}})
            const machzoneref = await MachineZoneRef.update({MachineId: MachineId, ZoneId: ZoneId, RefractoryId: material.id}, {where: {id: req.params.id}})
            return res.json(material)
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    async delete(req, res) {
        const {id} = req.params
        await Refractories.destroy({where: {id}})
        await Properties.destroy({where: {id}})
        await Proportions.destroy({where: {id}})
        return res.json({message: 'Указанный огнеупор удален'})
    }
}

module.exports = new RefractoriesController()

//      const {id} = req.params
//      let {Zones} = await Machine.findOne({where: {id}, include: Zone}) - возвращает зоны, относящиеся к конкретному агрегату

/*   OLD GETALL
      let {MachineId, ZoneId, SpecialInfoId, InfoId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let MaterialsSearch
        if (!MachineId && !ZoneId && !InfoId && !SpecialInfoId) {
            MaterialsSearch = await Refractories.findAll({limit, offset})
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
*/ 