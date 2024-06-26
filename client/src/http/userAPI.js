import { $authHost, $host } from "./index";
import {jwtDecode} from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/Users/registration', {email, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/Users/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/Users/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const checkUsers = async () => {
    const {data} = await $authHost.get('api/Users/check')
    return data
}

export const UpdateOneUser = async (id, email, password, role) => {
    const {data} = await $authHost.put('api/Users/update/' + id, {email, password, role})
    return data
}
export const DeleteUser = async (id) => {
    const {data} = await $authHost.post('/api/Users/delete/' + id)
    return data
}