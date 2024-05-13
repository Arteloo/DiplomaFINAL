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
    async updateOne(req, res, next) {
        const {id} = req.params
        const {Al, Fe, Si, Zr, Ca, Mg, Cr, Cug} = req.body
        const DevUp = await Proportions.findOne({where: {id}})
        for (let i=0; i < 8; i++) {
        if (Al) {
            DevUp.Al = Al
        } 
        if (Fe) {
            DevUp.Fe = Fe
        }  
        if (Si) {
            DevUp.Si = Si
        }  
        if (Zr) {
            DevUp.Zr = Zr
        }
        if (Ca) {
            DevUp.Ca = Ca
        }
        if (Mg) {
            DevUp.Mg = Mg
        }
        if (Cr) {
            DevUp.Cr = Cr
        }
        if (Cug) {
            DevUp.Cug = Cug
        }
    }
        DevUp.save()
        return res.json({message: 'Запись состава обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await Proportions.destroy({where: {id}})
        return res.json({message: 'Указанный состав огнеупора удален'})
    }

}

module.exports = new ProportionController()