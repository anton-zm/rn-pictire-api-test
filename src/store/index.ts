import { makeAutoObservable } from "mobx"

export class Storage { 
    _login = false
    
    constructor() { makeAutoObservable(this) }

    setLogin(v: boolean){
        this._login = v
    }

    get login(){
        return this._login
    }

}



