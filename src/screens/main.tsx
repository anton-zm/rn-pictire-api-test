import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'

export const MainScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    
    useEffect(() => {
        if(!store.login) navigation.navigate('Login')
    },[store.login])

    return (
        <View style={styles.wrapper}>
            <Header />
            <Text>Hello, {store.userName}</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    error: {
      color: 'red',
      textAlign: 'center',
  
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
  });
  