import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { Colors } from '../utils/consts'
//@ts-ignore
import logo from '../assets/rn-logo.png'

export const Intro = ({ navigation }: {navigation: any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 4000)
    },[])
    
    return (
        <View style={styles.container}>
          
            <Image fadeDuration={3000} style={styles.logo} source={logo}  />
            <ActivityIndicator size={'large'} color={'#31a9ce'} />
            <View style={styles.text_container}>
                <Text style={styles.text}>PHOTO SEARCH TEST TASK</Text>
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
      color: Colors.Main,
      fontSize: 14,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 48
    }
  });