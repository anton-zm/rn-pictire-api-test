import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useStore } from '../store/use-store'

export const MainScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    const [userName, setUserName] = useState(store.userName)

    useEffect(() => {
        if(!store.login) navigation.navigate('Login')
    },[store.login])

    return (
        <>
        <View>
            <Text>Hello, {userName}</Text>
        </View>
        </>
    )
})