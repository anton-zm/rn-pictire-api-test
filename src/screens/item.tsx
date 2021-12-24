import React, { useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'
import { Tags } from '../components/tags'
import { ItemDetails } from '../components/item-details'
import { observer } from 'mobx-react-lite'

export const ItemScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    const item = store.currentItem!
    const tags = item.tags?.map(tag => tag.title)

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
                {tags && 
                    <Tags 
                        data={tags} 
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