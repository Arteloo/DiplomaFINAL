import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }
    
    setAuth(bool) {
        this._isAuth = bool
    }
    setAdmin(bool) {
        this._isAdmin = bool
    }
    setUser(user) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get isAdmin() {
        return this._isAdmin
    }
    get user() {
        return this._user
    }
}