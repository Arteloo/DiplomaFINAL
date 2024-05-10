const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('Users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING(30), unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING(30), allowNull: false},
    FIO: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING(5), defaultValue: 'USER', allowNull: false},
})

const Developers = sequelize.define('Developers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING},
    link: {type: DataTypes.STRING},
    INN: {type: DataTypes.STRING(12), unique: true, allowNull: false},
    OGRN: {type: DataTypes.STRING(13), unique: true, allowNull: false},
    phone: {type: DataTypes.STRING(15), unique: true, allowNull: false}
})

const Apparatus = sequelize.define('Apparatus', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Machine = sequelize.define('Machine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
})

const Zone = sequelize.define('Zone', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Info = sequelize.define('Info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Class: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const SpecInfo = sequelize.define('Special_Info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Spec: {type: DataTypes.STRING, allowNull: false}
})

const Properties = sequelize.define('Properties', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    PressPoint: {type: DataTypes.REAL},
    Refractorisity: {type: DataTypes.REAL},
    Porosity: {type: DataTypes.REAL},
    TKLR: {type: DataTypes.REAL},
    Thermosity: {type: DataTypes.REAL}

})

const Proportions = sequelize.define('Proportions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Al: {type: DataTypes.DECIMAL(4,2)},
    Fe: {type: DataTypes.DECIMAL(4,2)},
    Si: {type: DataTypes.DECIMAL(4,2)},
    Zr: {type: DataTypes.DECIMAL(4,2)},
    Ca: {type: DataTypes.DECIMAL(4,2)},
    Mg: {type: DataTypes.DECIMAL(4,2)},
    Cr: {type: DataTypes.DECIMAL(4,2)},
    Cug: {type: DataTypes.DECIMAL(4,2)}
})

const Refractories = sequelize.define('Refractories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

Proportions.hasOne(Refractories)
Refractories.belongsTo(Proportions)

Properties.hasOne(Refractories)
Refractories.belongsTo(Properties)

Info.hasOne(Refractories)
Refractories.belongsTo(Info)

SpecInfo.hasMany(Refractories)
Refractories.belongsTo(SpecInfo)

Developers.hasMany(Refractories)
Refractories.belongsTo(Developers)

Machine.belongsToMany(Zone, {through: Apparatus})
Zone.belongsToMany(Machine, {through: Apparatus})

Apparatus.hasMany(Refractories)
Refractories.belongsTo(Apparatus)

module.exports = {
    Users,
    Developers,
    Apparatus,
    Machine, 
    Zone,
    Info,
    SpecInfo,
    Properties,
    Proportions,
    Refractories
}
