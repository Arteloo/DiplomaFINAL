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
    async delete(req, res) {
        const {id} = req.params
        await Properties.destroy({where: {id}})
        return res.json({message: 'Указанный огнеупор удален'})
    }

}

module.exports = new PropertyController()