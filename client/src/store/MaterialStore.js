import {makeAutoObservable} from 'mobx';

export default class MaterialStore {
    constructor() {
        this._Developers = [
            {id: 1, Name: "АО Боровичский комбинат огнеупоров", link: "aobko.ru", INN: 5320002951, OGRN: 1025300987139, phone: 88166425662}
        ]
        this._Infos = [
            {id: 1, Class: "Муллитовые"},
            {id: 2, Class: "Корундовые"},
            {id: 3, Class: "Периклазоуглеродистые"},
        ]
        this._Special_Infos = [
            {id: 1, Spec: "Для футеровки"}
        ]
        this._Machines = [
            {id: 1, name: 'Доменная печь'},
            {id: 2, name: 'Сталеразливочный ковш'},
            {id: 3, name: 'Электросталеплавильная печь'},
            {id: 4, name: 'Кислородный конвертер'}
        ]
        this._Zones = [
            {id: 1, name: 'Лещадь'},
            {id: 2, name: 'Горн'},
            {id: 3, name: 'Заплечики'}
        ]
        this._MachineRefs = [
            {id: 1, MachineId: 1, RefractoryId: 1, ZoneId: 1},
            {id: 2, MachineId: 2, RefractoryId: 2, ZoneId: 1},
            {id: 3, MachineId: 2, RefractoryId: 3, ZoneId: 2}
        ]
        this._Refractories = [
            {id: 1, name: 'МЛДД', img: '163be540-bf9f-46fd-88d2-0eb79682532d.jpg', InfoId: 1, SpecialInfoId: 1, DeveloperId: 1},
            {id: 2, name: "ГПК-13", img: '8f8df180-bc19-47c5-8eab-c550e974bd91.jpg', InfoId: 1, SpecialInfoId: 1, DeveloperId: 1}
        ]
        this._selectedMachine = {}
        this._selectedZone = {}
        this._selectedInfo = {}
        this._selectedSpec = {}
        makeAutoObservable(this)
    }
    
    setDevelopers(Dev) {
        this._Developers = Dev
    }
    setInfos(Inf) {
        this._Infos = Inf
    }
    setSpec(Spec) {
        this._Special_Infos = Spec
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

    get Developers() {
        return this._Developers
    }
    get Infos() {
        return this._Infos
    }
    get SpecInfos() {
        return this._Special_Infos
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
}
