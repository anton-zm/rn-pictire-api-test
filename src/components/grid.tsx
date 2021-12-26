import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { IPhoto } from '../interfaces'
import { useStore } from '../store/use-store'
import { searchPhotos } from '../utils/api-reqs'
import { hydrateItems } from '../utils/funcs'
import { Photo } from './photo'

export const Grid = observer(({navigation, data}:{navigation: any, data:IPhoto[]}) => {
    const store = useStore()
    const [photos, setPhotos] = useState(data)
    const result = store.tag ? photos : data

    const Item = ({item}:{item:IPhoto}) => (<Photo navigation={navigation} item={item} />)

    useEffect(() => {
        if(store.tag){
            searchPhotos(store.tag)
                .then((res: Record<string, any>) => {
                    setPhotos(hydrateItems(res.results))
                    store.setImgData(hydrateItems(res.results))
                })
        }
    },[store.tag])
    
    return (
        <>
            <FlatList 
                keyExtractor={item => item.id} 
                data={result} 
                renderItem={Item}
                numColumns={2}
                scrollEnabled={true}
            />
        </>
    )
})