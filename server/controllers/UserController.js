const bcrypt = require('bcrypt')
const {Users} = require('../models/models')
const ApiError = require("../error/ApiError")
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, login, role) => {
    return jwt.sign({id, email, login, role}, 
        process.env.SECRET_KEY, 
        {expiresIn: '6h'})

}

class UserController {
    async registration(req, res, next) {
            const {email, password, role} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Не указан email/пароль'))
            }
            const candidate = await Users.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPass = await bcrypt.hash(password, 4)
            const NewUser = await Users.create({email, role, password: hashPass})
            const token = generateJwt(NewUser.id, NewUser.email, NewUser.role)
            return res.json({token})
    }
    async update(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Не указан email/пароль'))
        }
        const candidate = await Users.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPass = await bcrypt.hash(password, 4)
        const UpdUser = await Users.update({email, role, password: hashPass}, {where: {id: req.params.id}})
        return res.json(UpdUser)
}
    async login(req, res, next) {
        const {email, password} = req.body
        const logUser = await Users.findOne({where: {email}})
        if (!logUser) {
            return next(ApiError.badRequest('Пользователь с такой почтой отсутствует в системе'))
        }
        let compPassword = bcrypt.compareSync(password, logUser.password)
        if (!compPassword) {
            return next(ApiError.badRequest('Указан некорректный пароль'))
        }
        const token = generateJwt(logUser.id, logUser.email, logUser.role)
        return res.json({token})
    }
    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.login)
        return res.json({token, message: 'All right'})
    }
    async getOne(req, res) {
        const {id} = req.params
        const Usar = await Users.findOne(
            {
                where: {id}
            }
        )
        return res.json(Usar)
    }
    async getAll(req, res, next) {
        const names = await Users.findAll()
        return res.json(names)
    }
    async delete(req, res) {
        const {id} = req.params
        await Users.destroy({where: {id}})
        return res.json({message: 'Указанный пользователь удален'})
    }
}

module.exports = new UserController()