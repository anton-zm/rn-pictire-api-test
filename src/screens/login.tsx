import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../utils/consts';

export const LoginScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Enter your name'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Enter password (3 + 4 = ?) '
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_text}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
        alignItems: 'center'
    },
    btn_text: {
        color: 'white',
        fontSize: 18
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