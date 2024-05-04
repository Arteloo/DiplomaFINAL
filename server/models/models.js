const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('Users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    FIO: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Developers = sequelize.define('Developers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING},
    link: {type: DataTypes.STRING},
    INN: {type: DataTypes.STRING(12), unique: true},
    OGRN: {type: DataTypes.STRING(13), unique: true},
    phone: {type: DataTypes.STRING(15), unique: true}
})

const Apparatus = sequelize.define('Apparatus', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Machine = sequelize.define('Machine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Zone = sequelize.define('Zone', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Info = sequelize.define('Info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Class: {type: DataTypes.STRING}
})

const SpecInfo = sequelize.define('Special_Info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Spec: {type: DataTypes.STRING}
})

const Properties = sequelize.define('Properties', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    PressPoint: {type: DataTypes.REAL, defaultValue: '0.0'},
    Refractorisity: {type: DataTypes.REAL},
    Porosity: {type: DataTypes.REAL},
    TKLR: {type: DataTypes.REAL},
    Thermosity: {type: DataTypes.REAL}

})

const Proportions = sequelize.define('Proportions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    AL: {type: DataTypes.DECIMAL(4,2)},
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
})

Proportions.hasOne(Refractories)
Refractories.belongsTo(Proportions)

Properties.hasOne(Refractories)
Refractories.belongsTo(Properties)

Info.hasOne(Refractories)
Refractories.belongsTo(Info)

SpecInfo.hasMany(Info)
Info.belongsTo(SpecInfo)

Developers.hasOne(Refractories)
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