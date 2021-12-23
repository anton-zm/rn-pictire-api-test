import { makeAutoObservable } from "mobx"
import { IPhoto } from "../interfaces"
import config from "../config"
import { hydrateItems } from "../utils/funcs"

export class Storage { 
    _login = false
    _userName = ''
    _imgData:IPhoto[] = []
    
    constructor() { makeAutoObservable(this) }

    setLogin(v: boolean){
        this._login = v
    }
    setUserName(v:string){
        this._userName = v
    }
    setImgData(data: IPhoto[]){
        this._imgData = data
    }
    fetchStartData(){
        fetch(`${config.api_url}/photos/random?count=30&client_id=${config.api_key}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => {
                this.setImgData(hydrateItems(res))
            })
            .catch(e => console.log(e))
    }

    get login(){
        return this._login
    }
    get userName(){
        return this._userName
    }
    get imgData(){
        return this._imgData
    }

}



