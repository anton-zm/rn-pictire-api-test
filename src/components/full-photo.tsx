import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ArrowBack } from '../assets/svg/arrow-back'
import { Expand } from '../assets/svg/expand'
import { Decrease } from '../assets/svg/decrease'

export const FullScreenImage = observer(({img, onClose}:{img: string, onClose: () => void}) => {
    const [resize, setResize] = useState(false)
    return (
        <View style={styles.overlay}>
            <View style={styles.icons}>
                <TouchableOpacity onPress={onClose}>
                    <ArrowBack />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setResize(!resize)
                }}>
                    {resize ? <Decrease /> : <Expand />}
                </TouchableOpacity>
            </View>
            <ImageBackground 
                resizeMode={resize ? 'cover' : 'contain'}
                style={styles.img} 
                source={{uri: img}} 
            />
        </View>
    )
})

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'black',
        opacity: 0.9,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        zIndex: 9,
        paddingTop: 32
    },
    img: {
        width: '100%',
        height: '80%',
        position: 'relative',        
    },
    icons: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 48,
        left: 0,
        paddingHorizontal: 15
    }
})