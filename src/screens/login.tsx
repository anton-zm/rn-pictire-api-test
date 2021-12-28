import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Input } from '../components/text-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../utils/consts';
import { validateLoginForm } from '../utils/funcs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore } from '../store/use-store';
import { Screens } from '../interfaces';

export const LoginScreen = observer(({ navigation }: {navigation: any}) => {
    const store = useStore()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(' ')   

    const Confirm = async () => {
        const isValidData = validateLoginForm(password, name, setError)
        if(isValidData){
            store.setUserName(name)
            store.setLogin(true)
            const record = await AsyncStorage.setItem('user', name)
            console.log(record)
            navigation.reset({ index: 0, routes: [{ name: Screens.MAIN }] })
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.form}>
                <Input
                    onChange={setName}
                    value={name}
                    placeholder='Enter your name'
                />
                <Input
                    onChange={setPassword}
                    value={password}
                    placeholder='Enter password (3 + 4 = ?) '
                />
                {error && <Text style={styles.error}>{error}</Text>}
                <TouchableOpacity onPress={Confirm} style={styles.btn}>
                    <Text style={styles.btn_text}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingHorizontal: 15
    },
    title: {
        fontSize: 24,
        color: Colors.Main,
        marginBottom: 48
    },
    form: {
        width: '100%',
    },
    input: {
        borderColor: Colors.Grey,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: Colors.Main,
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        marginTop: 48
    },
    btn_text: {
        color: 'white',
        fontSize: 18
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    text_container: {
      alignItems: 'center',
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      bottom: 30,
      width: '100%'
    },
    text: {
      color:'white',
      fontSize: 22,
    },
  });