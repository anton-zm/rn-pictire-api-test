import { observer } from 'mobx-react-lite';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStore } from '../store/use-store';
import { Colors } from '../utils/consts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Header = observer(() => {
    const store = useStore()
    const Logout = async () => {
        await AsyncStorage.clear()
        store.setLogin(false)
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <Text style={styles.title}>{store.userName}</Text>
                <TouchableOpacity onPress={Logout}>
                    <Text style={styles.logout}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.Main,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 16,   
        color: 'white',
    },
    logout:{
        color: 'white'
    }
})