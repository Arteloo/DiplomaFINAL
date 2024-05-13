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
    async getOne(req, res, next) {
        const {id} = req.params
        const PropOne = await Proportions.findOne(
            {
                where: {id}
            }
        )
        return res.json(PropOne)
    }
    async delete(req, res) {
        const {id} = req.params
        await Proportions.destroy({where: {id}})
        return res.json({message: 'Указанный состав огнеупора удален'})
    }

}

module.exports = new ProportionController()