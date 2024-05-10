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
    async delete(req, res) {
        
    }

}

module.exports = new InfoController()