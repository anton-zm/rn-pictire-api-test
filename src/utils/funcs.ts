import config from "../config"


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