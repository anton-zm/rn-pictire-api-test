import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export const Intro = ({ navigation }: {navigation: any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 5000)
    },[])
    
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'white'} />
            <View style={styles.text_container}>
                <Text style={styles.text}>TEST TASK</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4c4ff1',
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
      color:'white',
      fontSize: 22,
    },
  });