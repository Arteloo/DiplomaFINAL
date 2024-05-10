const {Proportions} = require('../models/models')
const ApiError = require("../error/ApiError")

class ProportionController {
    async create(req, res) {
        const {Al, Fe, Si, Zr, Ca, Mg, Cr, Cug} = req.body
        const RefraPropCreate = await Proportions.create({Al, Fe, Si, Zr, Ca, Mg, Cr, Cug})
        return res.json(RefraPropCreate)
    }

    async getAll(req, res, next) {
        const ProportionsAll = await Proportions.findAll()
        return res.json(ProportionsAll)
    }
    async delete(req, res) {
        
    }

}

module.exports = new ProportionController()