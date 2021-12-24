import config from "../config"

export const searchPhotos = (req: string) => {
    return fetch(`${config.api_url}/search/photos?query=${req}&per_page=40&client_id=${config.api_key}`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            return Promise.reject(`Error: ${res.status}`)
        })
        .catch(e => console.log(e))
}

export const getStartPhotos = () => {
    return fetch(`${config.api_url}/photos/random?count=30&client_id=${config.api_key}`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            return Promise.reject(`Error: ${res.status}`)
        })
        .catch(e => console.log(e))
}