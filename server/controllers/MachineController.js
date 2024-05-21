const {Machine, Zone, MachineZoneRef} = require('../models/models')
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
    async getOne(req, res, next) {
        const {id} = req.params
        const MachineOne = await Machine.findOne(
            {
                where: {id}, include: MachineZoneRef
            }
        )
        const {Zones} = MachineOne
        return res.json([MachineOne, Zones])
    }
    async updateOne(req, res, next) {
        const {id} = req.params
        const {name} = req.body
        const MachineUp = await Machine.findOne({where: {id}})
       
        if (name) {
            MachineUp.name = name
        } 
        MachineUp.save()
        return res.json({message: 'Запись агрегата обновлена'})
    }
    async delete(req, res) {
        const {id} = req.params
        await Machine.destroy({where: {id}})
        return res.json({message: 'Указанный аппарат удален'})
    }

}

module.exports = new MachineController()