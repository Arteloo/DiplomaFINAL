import {makeAutoObservable} from 'mobx';

export default class MaterialStore {
    constructor() {
        this._Developers = []
        this._Infos = []
        this._SpecialInfos = []
        this._Machines = []
        this._Zones = []
        this._MachineRefs = []
        this._Proportions = []
        this._Properties = []
        this._Refractories = []
        this._selectedMachine = {}
        this._selectedZone = {}
        this._selectedInfo = {}
        this._selectedSpec = {}
        this._Users =[]
        this._searchRef = Number
        this._searchPoros = Number
        this._searchPress = Number
        makeAutoObservable(this)
    }
    setUsers(Dev) {
        this._Users = Dev
    }
    setDevelopers(Dev) {
        this._Developers = Dev
    }
    setInfos(Inf) {
        this._Infos = Inf
    }
    setSpec(Spec) {
        this._SpecialInfos = Spec
    }
    setMachines(Mach) {
        this._Machines = Mach
    }
    setZones(Zon) {
        this._Zones = Zon
    }
    setRefs(Ref) {
        this._MachineRefs = Ref
    }
    setRefractories(Refra) {
        this._Refractories = Refra
    }
    setProportion(Prop) {
        this._Proportions = Prop
    }
    setProperties(Prop) {
        this._Properties = Prop
    }

    setSelectedMachine(Machine) {
        this._selectedMachine = Machine
    }
    setSelectedZone(Zone) {
        this._selectedZone = Zone
    }
    setSelectedInfo(Info) {
        this._selectedInfo = Info
    }
    setSelectedSpec(Spec) {
        this._selectedSpec = Spec
    }
    setSelectedRef(Ref) {
        this._searchRef = Ref
    }
    setSelectedPor(Por) {
        this._searchPoros = Por
    }
    setSelectedPress(Press) {
        this._searchPress = Press
    }

    get Users() {
        return this._Users
    }
    get Developers() {
        return this._Developers
    }
    get Infos() {
        return this._Infos
    }
    get SpecInfos() {
        return this._SpecialInfos
    }
    get Machines() {
        return this._Machines
    }
    get Zones() {
        return this._Zones
    }
    get Refs() {
        return this._MachineRefs
    }
    get Refractories() {
        return this._Refractories
    }
    get Proportions() {
        return this._Proportions
    }
    get Properties() {
        return this._Properties
    }

    get selectedMachine() {
        return this._selectedMachine
    }
    get selectedZone() {
        return this._selectedZone
    }
    get selectedInfo() {
        return this._selectedInfo
    }
    get selectedSpec() {
        return this._selectedSpec
    }
    get searchRef() {
        return this._searchRef
    }
    get searchPor() {
        return this._searchPoros
    }
    get searchPress() {
        return this._searchPress
    }
}
