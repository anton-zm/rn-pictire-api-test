import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { IPhoto } from '../interfaces'
import { useStore } from '../store/use-store'

export const Photo = observer(({item, navigation}:{item:IPhoto, navigation: any}) => {
    const store = useStore()
    return (
        <TouchableOpacity 
            onPress={() => {
                store.setCurrentItem(item)
                store.setTag('')
                navigation.navigate('Item')
            }}
            style={styles.item}
        >
            <Image resizeMode='cover' style={styles.img} source={{uri: item.url}} />
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
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