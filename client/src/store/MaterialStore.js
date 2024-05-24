import {makeAutoObservable} from 'mobx';

export default class MaterialStore {
    constructor() {
        makeAutoObservable(this)
        this._Developers = [
            {id: 1, Name: "АО Боровичский комбинат огнеупоров", link: "aobko.ru", INN: 5320002951, OGRN: 1025300987139, phone: 88166425662}
        ]
        this._Infos = [
            {id: 1, Class: "Для футеровки"}
        ]
        this._Special_Infos = [
            {id: 1, Spec: "Муллитовые"}
        ]
        this._Machines = [
            {id: 1, name: 'Доменная печь'},
            {id: 2, name: 'Сталеразливочный ковш'}
        ]
        this._Zones = [
            {id: 1, name: 'Лещадь'},
            {id: 1, name: 'Горн'}
        ]
        this._MachineRefs = [
            {id: 1, MachineId: 1, RefractoryId: 1, ZoneId: 1},
            {id: 3, MachineId: 2, RefractoryId: 2, ZoneId: 1}
        ]
        this._Refractories = [
            {id: 1, name: 'МЛДД', img: '163be540-bf9f-46fd-88d2-0eb79682532d.jpg', InfoId: 1, SpecialInfoId: 1, DeveloperId: 1},
            {id: 2, name: "ГПК-13", img: '8f8df180-bc19-47c5-8eab-c550e974bd91.jpg', InfoId: 1, SpecialInfoId: 1, DeveloperId: 1}
        ]
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

}