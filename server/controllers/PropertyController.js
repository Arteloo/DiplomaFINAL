const {Properties} = require('../models/models')
const ApiError = require("../error/ApiError")

class PropertyController {
    async create(req, res) {
        const {PressPoint, Thermosity, Refractorisity, TKLR, Porosity} = req.body
        const RefPropCreate = await Properties.create({PressPoint, Thermosity, Refractorisity, TKLR, Porosity})
        return res.json(RefPropCreate)
    }

    async getAll(req, res, next) {
        const PropertiAll = await Properties.findAll()
        return res.json(PropertiAll)
    }
    async getOne(req, res, next) {
        const {id} = req.params
        const PropOne = await Properties.findOne(
            {
                where: {id}
            }
        )
        return res.json(PropOne)
    }
    async updateOne(req, res, next) {
        const {id} = req.params
        const {PressPoint, Refractorisity, TKLR, Thermosity, Porosity} = req.body
        const DevUp = await Properties.findOne({where: {id}})
        for (let i=0; i < 4; i++) {
        if (PressPoint) {
            DevUp.PressPoint =PressPoint
        } 
        if (Refractorisity) {
            DevUp.Refractorisity = Refractorisity
        }  
        if (TKLR) {
            DevUp.TKLR = TKLR
        }  
        if (Thermosity) {
            DevUp.Thermosity = Thermosity
        }
        if (Porosity) {
            DevUp.Porosity = Porosity
        }
    }
        DevUp.save()
        return res.json({message: 'Запись свойств обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await Properties.destroy({where: {id}})
        return res.json({message: 'Указанный огнеупор удален'})
    }

}

module.exports = new PropertyController()