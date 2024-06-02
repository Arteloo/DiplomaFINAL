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
        this._SpecialInfos = [
            {id: 1, Spec: "Для футеровки"},
            {id: 2, Spec: 'Для ведения процесса плавки'},
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
        this._Proportions = [
            {id: 1, Al: 63.00, Fe: 1.20, Si: 0.00, Zr: 0.00, Ca: 0.00, Mg: 0.00, Cr: 0.00, Cug: 0.00},
            {id: 2, Al: 65.00, Fe: 1.5, Si: 1.00, Zr: 2.00, Ca: 0.00, Mg: 0.00, Cr: 0.00, Cug: 0.00},
            {id: 2, Al: 64.00, Fe: 1.2, Si: 5.00, Zr: 2.00, Ca: 0.00, Mg: 0.00, Cr: 0.00, Cug: 1.01},
        ]
        this._Properties = [
            {id: 1, PressPoint: 65, Refractorisity: 1500, Porosity: 17, TKLR: 0, Thermosity: 0},
            {id: 2, PressPoint: 62, Refractorisity: 1550, Porosity: 16, TKLR: 0.4, Thermosity: 500},
            {id: 3, PressPoint: 62, Refractorisity: 1850, Porosity: 16, TKLR: 0.4, Thermosity: 500},
        ]
        this._Refractories = [
            {id: 1, name: 'МЛДД', img: '163be540-bf9f-46fd-88d2-0eb79682532d.jpg', InfoId: 1, SpecialInfoId: 1, DeveloperId: 1, ProportionId: 1},
            {id: 2, name: "ГПК-13", img: '8f8df180-bc19-47c5-8eab-c550e974bd91.jpg', InfoId: 2, SpecialInfoId: 1, DeveloperId: 1, ProportionId: 2},
            {id: 3, name: 'Сгинь-5к', img: '163be540-bf9f-46fd-88d2-0eb79682532d.jpg', InfoId: 2, SpecialInfoId: 1, DeveloperId: 1, ProportionId: 3},
            
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
}
