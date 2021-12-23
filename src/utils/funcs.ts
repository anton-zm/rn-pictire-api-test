import config from "../config"
import { IPhoto } from "../interfaces"


const checkPassword = (password: string):boolean => {
    if(password !== config.password) return false
    return true
}

export const validateLoginForm = (
        password: string, 
        name: string, 
        setter: (v: string) => void
    ):boolean => {
    const isMatchedPassword = checkPassword(password)
    if(!name) {
        setter('Enter your name, please')
        return false
    }else if(!password){
        setter('Enter password, please')
        return false
    }else if(!isMatchedPassword) {
        setter('Wrong password!')
        return false
    }
    return true
}

export const hydrateItems = (array: Record<string, any>[]):IPhoto[] => {
    const filteredData = array.filter((e:Record<string, any>) => {
        return (e.description && e.location.title)
    })
    const normalizeData = filteredData.map((e:Record<string, any>) => {
        return {
            author: e.user.name,
            createdAt: e.created_at,
            description: e.description,
            likes: e.likes,
            location: e.location.title,
            url: e.urls.regular,
            id: e.id
        }
    })
    return normalizeData
}