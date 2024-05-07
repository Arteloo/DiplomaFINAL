const ApiError = require("../error/ApiError")

class MachineController {
    async create(req, res) {

    }
    async getAll(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
    async delete(req, res) {
    }
    async delete(req, res) {
        
    }
}

module.exports = new MachineController()