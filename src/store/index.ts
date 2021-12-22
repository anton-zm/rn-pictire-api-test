import { makeAutoObservable } from "mobx"

export class Storage { 
    
    constructor() { makeAutoObservable(this) }

}



