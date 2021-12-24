import { makeAutoObservable } from "mobx"
import { IPhoto } from "../interfaces"
import { hydrateItems } from "../utils/funcs"
import { getStartPhotos } from "../utils/api-reqs"

export class Storage { 
    _login = false
    _userName = ''
    _imgData:IPhoto[] = []
    _currentItem:IPhoto | null = null
    _tag = ''
    
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
        getStartPhotos()
            .then(res => {
                this.setImgData(hydrateItems(res))
            })
            .catch(e => console.log(e))
    }
    setCurrentItem(v:IPhoto){
        this._currentItem = v
    }
    setTag(v:string){
        this._tag = v
    }

    get login(){
        return this._login
    }
    get userName(){
        return this._userName
    }
    get imgData(){
        return JSON.stringify(this._imgData)
    }
    get currentItem(){
        return this._currentItem
    }
    get tag(){
        return this._tag
    }

}



