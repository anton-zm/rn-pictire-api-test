import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { IPhoto } from '../interfaces'
import { useStore } from '../store/use-store'
import { searchPhotos } from '../utils/api-reqs'
import { hydrateItems } from '../utils/funcs'

export const Grid = observer(({navigation, data}:{navigation: any, data:IPhoto[]}) => {
    const store = useStore()
    const [photos, setPhotos] = useState(data)
    const result = store.tag ? photos : data

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
        <View style={styles.grid}>
            {result.map((item:IPhoto) => {
            return (
                <TouchableOpacity 
                    key={item.id} 
                    onPress={() => {
                        store.setCurrentItem(item)
                        store.setTag('')
                        navigation.navigate('Item')
                    }}
                    style={styles.item}
                >
                    <Image resizeMode='cover' style={styles.img} source={{uri: item.url}} />
                </TouchableOpacity>)
            })}
        </View>
    )
})

const styles = StyleSheet.create({
    grid: {
        flexDirection:'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 32,
        marginBottom: 20
    },
    item: {
        width: '50%',
        minHeight: 100,
    },
    img: {
        minHeight: 150,
        borderWidth: 3,
        borderColor: 'white'
    }
})