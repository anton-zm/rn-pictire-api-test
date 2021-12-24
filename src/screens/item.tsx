import React, { useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'
import { Tags } from '../components/tags'
import { ItemDetails } from '../components/item-details'
import { observer } from 'mobx-react-lite'
import { FullScreenImage } from '../components/full-photo'

export const ItemScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    const item = store.currentItem!
    const [fullsize, setFullSize] = useState(false)
    
    return (
        <View style={styles.wrapper}>
            {fullsize && 
                <FullScreenImage 
                    onClose={() => setFullSize(false)} 
                    img={item.url} 
                />
            }
            <Header />
            <ScrollView style={styles.content}>
                <TouchableOpacity onPress={() => setFullSize(true)}>
                    <ImageBackground 
                        style={styles.photo} 
                        source={{uri: item?.url}}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <ItemDetails item={item} />
                {item.tags && 
                    <Tags 
                        data={item.tags} 
                        onPress={(tag:string) => {
                            store.setTag(tag)
                            navigation.navigate('Main')
                        }} 
                    />}
            </ScrollView>
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative'
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