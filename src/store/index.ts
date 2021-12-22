import { makeAutoObservable } from "mobx"

export class Storage { 
    _login = false
    _userName = ''
    
    constructor() { makeAutoObservable(this) }

    setLogin(v: boolean){
        this._login = v
    }
    setUserName(v:string){
        this._userName = v
    }

    get login(){
        return this._login
    }
    get userName(){
        return this._userName
    }

}



