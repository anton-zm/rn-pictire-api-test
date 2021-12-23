import React from 'react'
import { Text, View } from 'react-native'
import { useStore } from '../store/use-store'

export const ItemScreen = () => {
    const store = useStore()
    const item = store.currentItem
    
    return (
        <View>
            <Text>{item?.id}</Text>
        </View>
    )
}