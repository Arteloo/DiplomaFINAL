import { $authHost, $host } from "./index";


export const createMachine = async (name) => {
    const {data} = await $authHost.post('api/Machines/create', name)
    return data
}
export const fetchMachines = async () => {
    const {data} = await $host.get('api/Machines/check')
    return data
}

export const createZone = async (name, MachineId) => {
    const {data} = await $authHost.post('api/Zones/create', name, MachineId)
    return data
}

export const fetchZones = async () => {
    const {data} = await $host.get('api/Zones/check')
    return data
}

export const createClass = async (Class) => {
    const {data} = await $authHost.post('api/Infos/create', Class)
    return data
}

export const fetchClasses = async () => {
    const {data} = await $host.get('api/Infos/check')
    return data
}

export const createSpecial = async (Spec) => {
    const {data} = await $authHost.post('api/SpecInfos/create', Spec)
    return data
}

export const fetchSpecial = async () => {
    const {data} = await $host.get('api/SpecInfos/check')
    return data
}

export const fetchRefs = async () => {
    const {data} = await $host.get('api/Refractories/check')
    return data
}

export const fetchOneRef = async (id) => {
    const {data} = await $host.get('api/Refractories/check/' + id)
    return data
}
export const createRef = async (Refractory) => {
    const {data} = await $authHost.post('api/Refractories/create', Refractory)
    return data
}

export const fetchDevs = async () => {
    const {data} = await $host.get('api/Developers/check')
    return data
}
export const createDev = async (Name, link, INN, OGRN, phone) => {
    const {data} = await $authHost.post('api/Developers/create', Name, link, INN, OGRN, phone)
    return data
}
export const fetchProportions = async () => {
    const {data} = await $host.get('api/Proportions/check')
    return data
}


export const fetchProperties = async () => {
    const {data} = await $host.get('api/Properties/check')
    return data
}

export const searchRefractories = async (MachineId, ZoneId, InfoId, SpecialInfoId, maxRefractorisity, maxPressPoint, maxPorosity) => {
    const {data} = await $host.get('api/Refractories/search', {
        params: {
            MachineId,
            ZoneId,
            InfoId,
            SpecialInfoId,
            maxRefractorisity,
            maxPressPoint,
            maxPorosity
        }
    });
    return data
}

