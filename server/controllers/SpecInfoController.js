const {SpecInfo} = require('../models/models')
const ApiError = require("../error/ApiError")

class SpecInfoController {
    async create(req, res) {
        const {Spec} = req.body
        const addSpec = await SpecInfo.create({Spec})
        return res.json(addSpec)
    }
    async getAll(req, res, next) {
        const names = await SpecInfo.findAll()
        return res.json(names)
    }
    async delete(req, res) {
        
    }

}

module.exports = new SpecInfoController()