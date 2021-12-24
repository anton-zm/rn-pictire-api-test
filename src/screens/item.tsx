import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'
import { Tags } from '../components/tags'
import { ItemDetails } from '../components/item-details'

export const ItemScreen = () => {
    const store = useStore()
    const item = store.currentItem!
    
    return (
        <View style={styles.wrapper}>
            <Header />
            <ScrollView style={styles.content}>
                <ImageBackground 
                    style={styles.photo} 
                    source={{uri: item?.url}}
                    resizeMode='contain'
                />
                <ItemDetails item={item} />
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '100%',
    },
    photo: {
        minHeight:250,
    },

})