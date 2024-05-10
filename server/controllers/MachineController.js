const {Machine} = require('../models/models')
const ApiError = require("../error/ApiError")
const { Sequelize } = require('../db')

class MachineController {
    async create(req, res) {
        const {name} = req.body
        const machine = await Machine.create({name})
        return res.json(machine)
    }
    async getAll(req, res, next) {
        const names = await Machine.findAll()
        return res.json(names)
    }
    async delete(req, res) {
    }

}

module.exports = new MachineController()