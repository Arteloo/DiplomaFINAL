const {Info} = require('../models/models')
const ApiError = require("../error/ApiError")

class InfoController {
    async create(req, res) {
        const {Class} = req.body
        const addClass = await Info.create({Class})
        return res.json(addClass)
    }
    async getAll(req, res, next) {
        const names = await Info.findAll()
        return res.json(names)
    }
    async getOne(req, res, next) {
        const {id} = req.params
        const InfoOne = await Info.findOne(
            {
                where: {id}
            }
        )
        return res.json(InfoOne)
    }
    async delete(req, res) {
        const {id} = req.params
        await Info.destroy({where: {id}})
        return res.json({message: 'Указанный класс огнеупора удален'})
    }

}

module.exports = new InfoController()