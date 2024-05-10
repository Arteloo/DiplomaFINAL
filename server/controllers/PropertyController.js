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
    async delete(req, res) {
        
    }

}

module.exports = new PropertyController()