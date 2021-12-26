import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'
import { Grid } from '../components/grid'
import { SearchForm } from '../components/search-form'

export const MainScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    const imgs = JSON.parse(store.imgData)
    const [photos, setPhotos] = useState(imgs)
    
    useEffect(() => {
        if(!store.login) navigation.navigate('Login')
    },[store.login])

    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>1000000+ photos, find your favourite!</Text>
                <SearchForm setPhotos={setPhotos} />
                <Grid data={photos} navigation={navigation}/>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
  });
  